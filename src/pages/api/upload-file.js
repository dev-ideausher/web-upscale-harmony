import multer from 'multer';
import fs from 'fs';
import path from 'path';

const tmpUploadDir = '/tmp/uploads'; // Temporary storage directory

// Ensure that the temporary upload directory exists
if (!fs.existsSync(tmpUploadDir)) {
  fs.mkdirSync(tmpUploadDir, { recursive: true });
}

const publicUploadDir = path.join(process.cwd(), 'public', 'uploads'); // Public upload directory

// Ensure that the public upload directory exists
if (!fs.existsSync(publicUploadDir)) {
  fs.mkdirSync(publicUploadDir, { recursive: true });
}

const allowedFileExtensions = ['.yaml', '.yml', '.txt'];

const storage = multer.memoryStorage();

const uploadMiddleware = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (allowedFileExtensions.includes(ext.toLowerCase())) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type.'));
    }
  },
}).array('files', 5);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await new Promise((resolve, reject) => {
        uploadMiddleware(req, res, (err) => {
          if (err) {
            return reject(err);
          }
          resolve();
        });
      });

      // Move files from /tmp to public/uploads
      await Promise.all(
        req.files.map(async (file) => {
          const ext = path.extname(file.originalname);
          const fileName = file.originalname; // Keep the same file name
          const tmpFilePath = path.join(tmpUploadDir, fileName);
          const publicFilePath = path.join(publicUploadDir, fileName);

          // Write file to public/uploads
          fs.writeFileSync(publicFilePath, file.buffer);

          // Unlink the file from the temporary directory
          if (fs.existsSync(tmpFilePath)) {
            fs.unlinkSync(tmpFilePath);
          }
        })
      );

      res.status(200).json({ message: 'Files uploaded successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error uploading files.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
