// src/app/pages/api/articleWrite.js
import { insertData } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(404).json({ error: 'Method Not Allowed' });
  }

  const { title, content } = req.body;

  try {
    // 데이터베이스에 데이터 삽입
    await insertData(title, content);

    // 성공 응답 전송
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Error saving data' });
  }
}
