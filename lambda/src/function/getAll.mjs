import mysql from 'mysql2/promise';

export const handler = async (event) => {
  let connection;

  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    // Create table if not exists
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS ${process.env.DB_TABLE_NAME} (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    // Query all todos
    const [rows] = await connection.query(`SELECT * FROM ${process.env.DB_TABLE_NAME}`);

    return {
      statusCode: 200,
      body: JSON.stringify({ data: rows })
    };
  } catch (error) {
    console.error(`Error reading data: ${error.message}`);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Error reading data: ${error.message}` })
    };
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};
