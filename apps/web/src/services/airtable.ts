import Airtable from 'airtable';

// Initialize Airtable configuration
// These values should be set in .env.local
const AIRTABLE_API_TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN;
const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;

if (!AIRTABLE_API_TOKEN || !AIRTABLE_BASE_ID) {
    console.warn(
        'Missing Airtable configuration. Please check NEXT_PUBLIC_AIRTABLE_API_TOKEN and NEXT_PUBLIC_AIRTABLE_BASE_ID in .env.local'
    );
}

// Configure Airtable
Airtable.configure({
    apiKey: AIRTABLE_API_TOKEN,
});

// Export the base instance
export const base = Airtable.base(AIRTABLE_BASE_ID || '');

// Helper function to map Airtable records to plain objects with ID
export const mapRecord = <T>(record: Airtable.Record<any>): T & { id: string } => {
    return {
        id: record.id,
        ...record.fields,
    } as T & { id: string };
};
