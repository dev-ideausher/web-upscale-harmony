import fs from 'fs';
import getRawBody from 'raw-body';

export const config = {
  api: {
    bodyParser: false, // Disabling built-in bodyParser
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const bodyBuffer = await getRawBody(req);
      const body = bodyBuffer.toString('utf-8');
      const { fileName, content } = JSON.parse(body);

      const filePath = `./public/uploads/${fileName}`;

      fs.writeFile(filePath, content, (err) => {
        if (err) {
          return res.status(500).json({ error: 'Error updating file content.' });
        }

        res.status(200).json({ message: 'File content updated successfully.' });
      });
    } catch (error) {
      res.status(400).json({ error: 'Invalid request body.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}