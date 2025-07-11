import { pgTable, serial, text, timestamp, vector, index } from "drizzle-orm/pg-core";

export const documentsTable = pgTable(
    "documents", 
    {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    content: text("content").notNull(),
    embedding: vector("embedding", {
        dimensions: 256
    }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
    },
    (table) => [
        index("embedding_index").using("hnsw", table.embedding.op("vector_cosine_ops"))
    ]
);

export type InsertFacts = typeof documentsTable.$inferInsert;
export type SelectFacts = typeof documentsTable.$inferSelect;


