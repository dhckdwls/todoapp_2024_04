// pages/api/posts.js
import connection from '../../db'; // Import MySQL connection

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle POST request
    const { title, content } = req.body; // Assuming title and content are sent in the request body
    // You can perform database operations here, such as inserting the post into the database
    connection.query(
      'INSERT INTO posts (title, content) VALUES (?, ?)',
      [title, content],
      (error, results) => {
        if (error) {
          console.error('Error inserting post:', error);
          res.status(500).json({ error: 'Failed to insert post into database' });
          return;
        }
        console.log('Post inserted successfully');
        res.status(200).json({ message: 'Post inserted successfully' });
      },
    );
  } else {
    // Method not allowed for other request methods
    res.status(405).json({ error: 'Method not allowed' });
  }
}
