import { query } from './lib/utils.mjs';

export const handler = async (event) => {
  try {

    const sql = `SELECT * FROM todos`;
    const [rows] = await query(sql);

    return {
      statusCode: 200,
      body: JSON.stringify({ data: rows })
    };
  } catch (error) {
    console.error('Get by ID error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
