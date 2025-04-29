import mysql from 'mysql2/promise';

/**
 * Create a new MySQL connection
 */
export async function createConnection() {
  const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
  return mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  });
}

/**
 * Execute a query with a new connection
 */
export async function query(rawQuery, values = []) {
  const connection = await createConnection();
  try {
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS ${process.env.DB_TABLE_NAME} (
        id INT AUTO_INCREMENT PRIMARY KEY,
        todo VARCHAR(255) NOT NULL,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    return values.length
      ? await connection.execute(rawQuery, values)
      : await connection.execute(rawQuery);
  } finally {
    await connection.end();
  }
}

/**
 * Create todos table if not exists
 */
export async function createTableTodo() {
  const connection = await createConnection();
  try {
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS todos (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);
  } catch (error) {
    console.error('Create table error:', error);
    throw error;
  } finally {
    await connection.end();
  }
}
