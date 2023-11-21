import fs from 'fs';

export default function handler(req, res) {
    console.log(req.method)
  if (req.method === 'DELETE') {
    const { fileName } = req.query; // Assuming the fileName is provided as a query parameter

    if (!fileName) {
      return res.status(400).json({ error: 'Missing fileName parameter.' });
    }

    const filePath = `./uploads/${fileName}`;

    fs.unlink(filePath, (err) => {
      if (err) {
        return res.status(404).json({ error: 'File not found or could not be deleted.' });
      }

      res.status(200).json({ message: 'File deleted successfully.' });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}