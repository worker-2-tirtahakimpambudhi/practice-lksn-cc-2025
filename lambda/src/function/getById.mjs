import { query } from './lib/utils.mjs';

export const handler = async (event) => {
  try {
    const id = event.pathParameters.id;

    if (!id || isNaN(Number(id))) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid ID parameter' })
      };
    }

    const sql = `SELECT * FROM todos WHERE id = ?`;
    const [rows] = await query(sql, [id]);

    if (rows.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Todo not found' })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ data: rows[0] })
    };
  } catch (error) {
    console.error('Get by ID error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
