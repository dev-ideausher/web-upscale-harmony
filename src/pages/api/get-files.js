import fs from 'fs';

export default function handler(req, res) {
  const files = fs.readdirSync('./public/uploads'); // specify your upload directory
  res.status(200).json({ files });
}