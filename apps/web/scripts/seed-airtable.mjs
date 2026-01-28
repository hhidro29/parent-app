import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const { NEXT_PUBLIC_AIRTABLE_API_TOKEN: API_TOKEN, NEXT_PUBLIC_AIRTABLE_BASE_ID: BASE_ID } = process.env;

const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
    'Content-Type': 'application/json',
};

// Data to insert
const childrenData = [
    {
        fields: {
            Name: 'Liam A.',
            Program: 'English Academy',
            Location: 'Balikpapan - Jendral Sudirman',
            Avatar: 'https://i.pravatar.cc/150?u=liam',
            Tier: 'Gold',
            Points: 12500,
            Description: 'Primary School - Grade 5',
            SubscriptionCount: 1,
            SubscriptionDate: 'Since Jan 2024'
        }
    },
    {
        fields: {
            Name: 'Dora D.',
            Program: 'Champions Wonderlab',
            Location: 'Online Class',
            Avatar: 'https://i.pravatar.cc/150?u=dora',
            Tier: 'Silver',
            Points: 8400,
            Description: 'Kindergarten',
            SubscriptionCount: 1,
            SubscriptionDate: 'Since Mar 2025'
        }
    }
];

const campaignsData = [
    {
        fields: {
            Title: 'Cooking Class Next Week!',
            Type: 'story',
            Content: 'Prepare your aprons! Next week we are learning kitchen vocabulary.',
            Tag: 'New Activity',
            Image: 'https://placehold.co/600x400/png?text=Cooking'
        }
    }
];

async function seed() {
    console.log('🌱 Seeding Data...');

    // 1. Insert Children
    let childrenIds = [];
    console.log('Inserting Children...');
    const childRes = await fetch(`https://api.airtable.com/v0/${BASE_ID}/Children`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ records: childrenData, typecast: true })
    });
    const childJson = await childRes.json();
    if (childJson.records) {
        childrenIds = childJson.records;
        console.log(`✅ Added ${childJson.records.length} children.`);
    } else {
        console.error('❌ Error adding children:', childJson);
        return;
    }

    // 2. Insert Reports (Needs Child ID)
    if (childrenIds.length > 0) {
        const liamsId = childrenIds[0].id;
        const reportsData = [
            {
                fields: {
                    Title: 'Cooking verbs and kitchen terms',
                    Unit: 'Unit A · Language Introduction',
                    Date: new Date().toISOString(),
                    Status: 'present',
                    Child: [liamsId]
                }
            },
            {
                fields: {
                    Title: 'Basic Colors and Shapes',
                    Unit: 'Unit B · Art Class',
                    Date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
                    Status: 'absent',
                    Child: [liamsId]
                }
            }
        ];

        console.log('Inserting Reports...');
        const reportRes = await fetch(`https://api.airtable.com/v0/${BASE_ID}/ClassReports`, {
            method: 'POST',
            headers,
            body: JSON.stringify({ records: reportsData, typecast: true })
        });
        console.log('Reports Status:', reportRes.status);
    }

    // 3. Insert Campaigns
    console.log('Inserting Campaigns...');
    await fetch(`https://api.airtable.com/v0/${BASE_ID}/Campaigns`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ records: campaignsData, typecast: true })
    });

    console.log('✨ Seeding finished!');
}

seed();
