import {loadEnvConfig} from "@next/env";
import { documentsTable } from "./schema/documents-data";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

loadEnvConfig(process.cwd());

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error("DATABASE_URL is not set");
}

const dbSchema = {
    data: documentsTable,
 };

function initializeDb(url: string) {
    const client = new Client({ connectionString: url });
    client.connect();
    return drizzle(client, { schema: dbSchema });
  }
  

export const db = initializeDb(databaseUrl);














