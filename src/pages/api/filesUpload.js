// src/pages/api/filesUpload.js
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import pool from '../../app/lib/db';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    const form = new formidable.IncomingForm();

    // Set the directory for file uploads
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    form.uploadDir = uploadDir;

    // Handle file upload
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form:', err);
        return res.status(500).json({ error: 'Error parsing form' });
      }

      // Extract uploaded file information
      const file = files.file;
      const filename = file.name;
      const filepath = file.path;

      // Save file information to the database
      const [result] = await pool.execute(
        'INSERT INTO files (regDate, updateDate, relTypeCode, relId, filename, filepath) VALUES (NOW(), NOW(), ?, ?, ?, ?)',
        ['recipy', fields.relId, filename, filepath], // Assuming 'recipy' is the correct relTypeCode value
      );

      // Return file information
      res.status(200).json({ id: result.insertId, filename, filepath });
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Error uploading file' });
  }
}
