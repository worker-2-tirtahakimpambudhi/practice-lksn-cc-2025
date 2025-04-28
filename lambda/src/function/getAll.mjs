import { query } from "/opt/utils.mjs";

export const handler = async (event) => {
    let dbConnection;
    try {
        // Prepare query to select "hello world" from database
        const selectQuery = `SELECT 'Hello World' AS message`;
        
        const { connection, data } = await query(selectQuery);
        dbConnection = connection; // Save the real connection

        const [rows] = data;
        const message = rows.message; // Ambil kolom message

        // Return the message
        return {
            statusCode: 200,
            body: JSON.stringify({ message })
        };
    } catch (error) {
        console.error(`Error reading data: ${error.message}`);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Error reading data: ${error.message}` })
        };
    } finally {
        if (dbConnection) {
            await dbConnection.end();
        }
    }
};
