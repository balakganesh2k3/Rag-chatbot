import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Parse DATABASE_URL
const dbUrl = new URL(process.env.DATABASE_URL);
const host = dbUrl.hostname;
const port = parseInt(dbUrl.port);
const database = dbUrl.pathname.slice(1); // Remove leading slash
const user = dbUrl.username;
const password = dbUrl.password;

export default {
  schema: './db/schema/*.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host,
    port,
    database,
    user,
    password,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  },
  strict: true,
  verbose: true,
  tablesFilter: ['!_migrations'],
} satisfies Config;

