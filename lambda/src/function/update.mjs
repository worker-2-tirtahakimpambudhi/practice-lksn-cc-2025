import { todoModel } from './lib/validation.mjs';
import { query } from './lib/utils.mjs';

export const handler = async (event) => {
    try {
        const id = event.pathParameters.id;
        const body = JSON.parse(event.body);
        const { error, value } = todoModel.validate(body);

        if (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: error.details[0].message })
            };
        }

        const sql = `
            UPDATE todos
            SET todo = ?, description = ?, updated_at = CURRENT_TIMESTAMP
            WHERE id = ?;
        `;
        const [result] = await query(sql, [value.todo, value.description, id]);

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: result.affectedRows ? 'Todo updated' : 'Todo not found'
            })
        };
    } catch (error) {
        console.error('Update error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
