import fs from 'fs';
const path = require('path');

export default function handler(req, res) {
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');

  const files = fs.readdirSync(uploadDir); // specify your upload directory
  res.status(200).json({ files });
}