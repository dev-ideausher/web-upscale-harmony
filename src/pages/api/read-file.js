import fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { fileName } = req.query; // Assuming the fileName is provided as a query parameter

    if (!fileName) {
      return res.status(400).json({ error: 'Missing fileName parameter.' });
    }

    const filePath = `./public/uploads/${fileName}`;

    fs.readFile(filePath, 'utf-8', (err, content) => {
      if (err) {
        return res.status(404).json({ error: 'File not found.' });
      }

      res.status(200).json({ content });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}