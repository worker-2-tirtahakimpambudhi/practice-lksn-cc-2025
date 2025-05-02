import { query } from './lib/utils.mjs';

export const handler = async (event) => {
    try {
        const id = event.pathParameters.id;

        const sql = `DELETE FROM todos WHERE id = ?`;
        const [result] = await query(sql, [id]);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: result.affectedRows ? 'Todo deleted' : 'Todo not found'
            })
        };
    } catch (error) {
        console.error('Delete error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
