import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const { NEXT_PUBLIC_AIRTABLE_API_TOKEN: API_TOKEN, NEXT_PUBLIC_AIRTABLE_BASE_ID: BASE_ID } = process.env;

async function test() {
    console.log('Testing connection to Base:', BASE_ID);

    const response = await fetch(`https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
        },
    });

    const data = await response.json();
    console.log('Status:', response.status);
    console.log('Response:', JSON.stringify(data, null, 2));
}

test();
