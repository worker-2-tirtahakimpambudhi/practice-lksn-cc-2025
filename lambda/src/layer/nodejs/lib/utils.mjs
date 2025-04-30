import mysql from "mysql2/promise";


export async function getConnection() {
  const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
  return await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  });
}


export async function query(rawQuery, value ) {
    // Get the connection
    const mysqlConn = await getConnection();
    // Execute the query
    // Return the result query and the connection
    const result = (value) ?await mysqlConn.execute(rawQuery, value) :await mysqlConn.execute(rawQuery); 
    return {
      connection: mysqlConn,
      data: result
    }
  }