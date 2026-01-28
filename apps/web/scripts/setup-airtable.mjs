import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const { NEXT_PUBLIC_AIRTABLE_API_TOKEN: API_TOKEN, NEXT_PUBLIC_AIRTABLE_BASE_ID: BASE_ID } = process.env;

if (!API_TOKEN || API_TOKEN === 'your_api_token_here') {
    console.error('❌ Error: NEXT_PUBLIC_AIRTABLE_API_TOKEN is missing in .env.local');
    process.exit(1);
}

if (!BASE_ID) {
    console.error('❌ Error: NEXT_PUBLIC_AIRTABLE_BASE_ID is missing in .env.local');
    process.exit(1);
}

const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
};

const tables = [
    {
        name: 'Children',
        description: 'Profiles of children being monitored',
        fields: [
            { name: 'Name', type: 'singleLineText' },
            { name: 'Program', type: 'singleSelect', options: { choices: [{ name: 'English Academy' }, { name: 'Champions Wonderlab' }] } },
            { name: 'Location', type: 'singleLineText' },
            { name: 'Avatar', type: 'singleLineText' }, // URL to CDN
            { name: 'Tier', type: 'singleSelect', options: { choices: [{ name: 'Silver' }, { name: 'Gold' }] } },
            { name: 'Points', type: 'number', options: { precision: 0 } },
            { name: 'Description', type: 'singleLineText' },
            { name: 'SubscriptionCount', type: 'number', options: { precision: 0 } },
            { name: 'SubscriptionDate', type: 'singleLineText' },
        ],
    },
    {
        name: 'ClassReports',
        description: 'Daily activity reports',
        fields: [
            { name: 'Title', type: 'singleLineText' },
            { name: 'Unit', type: 'singleLineText' },
            { name: 'Date', type: 'singleLineText' }, // e.g., "4 Hours ago" or actual date
            { name: 'Status', type: 'singleSelect', options: { choices: [{ name: 'present' }, { name: 'absent' }, { name: 'sick' }, { name: 'excused' }] } },
            { name: 'Child', type: 'multipleRecordLinks', options: { linkedTableId: '' } }, // Will link later
        ],
    },
    {
        name: 'Campaigns',
        description: 'Stories and announcements',
        fields: [
            { name: 'Title', type: 'singleLineText' },
            { name: 'Type', type: 'singleSelect', options: { choices: [{ name: 'story' }, { name: 'promo' }, { name: 'announcement' }] } },
            { name: 'Content', type: 'multilineText' },
            { name: 'Image', type: 'singleLineText' },
            { name: 'Tag', type: 'singleLineText' },
        ],
    },
];

async function setup() {
    console.log('🚀 Starting Airtable Setup...');

    // 1. Create independent tables (Children, Campaigns)
    // Children might already exist from previous run, checking...

    const tablesToCreate = [tables[0], tables[2]]; // Children and Campaigns

    for (const table of tablesToCreate) {
        console.log(`\nCreating table: ${table.name}...`);
        try {
            const response = await fetch(`https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`, {
                method: 'POST',
                headers,
                body: JSON.stringify(table),
            });

            const data = await response.json();
            if (response.ok) {
                console.log(`✅ Table ${table.name} created successfully!`);
            } else {
                if (data.error?.type === 'TABLE_NAME_ALREADY_EXISTS') {
                    console.log(`⚠️  Table ${table.name} already exists. Skipping.`);
                } else {
                    console.error(`❌ Failed to create ${table.name}:`, data.error);
                }
            }
        } catch (error) {
            console.error(`❌ Error creating ${table.name}:`, error);
        }
    }

    // 2. Refresh table list to get IDs for linking
    console.log('\nFetching table IDs for linking...');
    const metaResponse = await fetch(`https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`, { headers });
    const metaData = await metaResponse.json();

    if (!metaData.tables) {
        console.error('❌ Failed to fetch tables metadata');
        return;
    }

    const childrenTable = metaData.tables.find(t => t.name === 'Children');
    if (!childrenTable) {
        console.error('❌ Children table not found! Cannot create ClassReports.');
        return;
    }

    console.log(`Found Children table ID: ${childrenTable.id}`);

    // 3. Create ClassReports with correct link
    const reportsTableDef = tables[1]; // ClassReports
    // Update the link field with actual ID
    const childField = reportsTableDef.fields.find(f => f.name === 'Child');
    if (childField) {
        childField.options = {
            linkedTableId: childrenTable.id
        };
    }

    console.log(`\nCreating table: ${reportsTableDef.name}...`);
    try {
        const response = await fetch(`https://api.airtable.com/v0/meta/bases/${BASE_ID}/tables`, {
            method: 'POST',
            headers,
            body: JSON.stringify(reportsTableDef),
        });

        const data = await response.json();
        if (response.ok) {
            console.log(`✅ Table ${reportsTableDef.name} created successfully!`);
        } else {
            if (data.error?.type === 'TABLE_NAME_ALREADY_EXISTS') {
                console.log(`⚠️  Table ${reportsTableDef.name} already exists. Skipping.`);
            } else {
                console.error(`❌ Failed to create ${reportsTableDef.name}:`, data.error);
            }
        }
    } catch (error) {
        console.error(`❌ Error creating ${reportsTableDef.name}:`, error);
    }

    console.log('\n✨ Setup finished! Check your Airtable base.');
}

setup();
