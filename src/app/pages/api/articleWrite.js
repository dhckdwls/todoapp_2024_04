// src/app/pages/api/articleWrite.js

import { query } from '../../app/lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ error: 'Method Not Allowed', message: 'Only POST requests are allowed' });
  }

  const { title, content } = req.body;

  // Validate request data
  if (!title || !content) {
    return res
      .status(400)
      .json({ error: 'Bad Request', message: 'Title and content are required' });
  }

  try {
    // Insert new article into the database
    const result = await query('INSERT INTO article (title, content) VALUES (?, ?)', [
      title,
      content,
    ]);

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Article successfully written to the database',
      articleId: result.insertId, // Send the ID of the newly inserted article back to the client
    });
  } catch (error) {
    console.error('Error writing article to database:', error);
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Failed to write article to the database',
    });
  }
}
