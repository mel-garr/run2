require('dotenv').config(); // load .env variables
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function testDB() {
  try {
    await client.connect();
    console.log('✅ DB connected successfully!');
    
    // Optional: test a query
    const res = await client.query('SELECT NOW()');
    console.log('Current time from DB:', res.rows[0]);

    await client.end();
  } catch (err) {
    console.error('❌ DB connection error:', err);
  }
}

testDB();
