// pages/api/upload.js
import multer from 'multer';
// import path from 'path';
import fs from 'fs';
const path = require('path');
const uploadDir = path.join(process.cwd(), 'public', 'uploads');

// const uploadDir = './public/uploads'; // specify your upload directory

// Ensure that the upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const allowedFileExtensions = ['.yaml', '.yml', '.txt'];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (allowedFileExtensions.includes(ext.toLowerCase())) {
      cb(null, file.originalname);
    } else {
      cb(new Error('Invalid file type.'));
    }
  },
});

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
}).array('files', 5); // 'files' is the field name for multiple files, 5 is the maximum number of files

export const config = {
  api: {
    bodyParser: false, // Disabling built-in bodyParser
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

      res.status(200).json({ message: 'Files uploaded successfully.' });
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'Error uploading files.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
