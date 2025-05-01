import { todoModel } from './lib/validation.mjs';
import { query } from './lib/utils.mjs';

export const handler = async (event) => {
    try {
        const body = JSON.parse(event.body);
        const { error, value } = todoModel.validate(body);

        if (error) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: error.details[0].message })
            };
        }

        const sql = `
            INSERT INTO todos (todo, description)
            VALUES (?, ?);
        `;
        const [result] = await query(sql, [value.todo, value.description]);

        return {
            statusCode: 201,
            body: JSON.stringify({
                message: 'Todo created successfully',
                todoId: result.insertId
            })
        };
    } catch (error) {
        console.error('Create error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
