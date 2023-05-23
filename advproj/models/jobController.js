// jobController.js

// Import the required modules and database connection
//const db = require('../config/database');
const mysql = require('mysql2');

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123raghad',
  database: 'linkedin',
});
// Define the searchJobs method to handle job search requests
async function searchJobs(req, res) {
  try {
    // Retrieve search parameters from the request query
    const { title, location } = req.query;
    res.json({ title});
    res.json({ location});
    // Build the SQL query to perform the job search using the provided parameters
    const query = `
      SELECT *
      FROM job_listings
      WHERE jobtitle LIKE '%${title}%'
        AND location LIKE '%${location}%'

    `;

    // Execute the query
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error searching jobs:', err);
        res.status(500).json({ error: 'An error occurred while searching for jobs' });
      } else {
        // Send the search results back to the client
        res.json({ jobs: results });
      }
    });
  } catch (error) {
    console.error('Error searching jobs:', error);
    res.status(500).json({ error: 'An error occurred while searching for jobs' });
  }
}

module.exports = {
  searchJobs
};
