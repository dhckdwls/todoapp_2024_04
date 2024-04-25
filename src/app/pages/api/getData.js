// src/app/pages/api/getData.js
import dbConnection from '../../util/database';

export default async function handler(req, res) {
  try {
    const [rows] = await dbConnection.query('SELECT * FROM article');
    res.status(200).json({ data: rows });
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
