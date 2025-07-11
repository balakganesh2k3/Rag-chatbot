import { db } from "../../../db";
import { documentsTable } from "../../../db/schema/documents-data";
import { generateEmbeddings } from "../generate/generate-embeddings";
import { cosineDistance, desc, gt, sql } from "drizzle-orm";

export async function retrieveDocuments(input: string, options: { limit?: number; minSimilarity?: number; name?: string | null } = {}) {
    const { limit = 10, minSimilarity = 0.3, name = null } = options;

    try {
        if (!process.env.OPENAI_API_KEY) {
            throw new Error('OpenAI API key is not configured. Please set OPENAI_API_KEY in your environment variables.');
        }

        // Generate vector embedding for input text
        const embeddings = await generateEmbeddings([input]);
        
        if (!embeddings || embeddings.length === 0) {
            throw new Error("Failed to generate embeddings");
        }

        // Calculate cosine similarity between input embedding and stored embeddings
        const similarity = sql<number>`1 - (${cosineDistance(documentsTable.embedding, embeddings[0])})`;
      
        // Query database for relevant documents
        const documents = await db
          .select({
            
            content: documentsTable.content,
            similarity
          })
          .from(documentsTable)
          // Filter by minimum similarity and optionally by case-insensitive name match
          .where(gt(similarity, minSimilarity))
          // Sort by highest similarity first
          .orderBy((t) => desc(t.similarity))
          // Limit number of results
          .limit(limit);
      
        return documents;
        
    } catch (error: any) {
        if (error?.message?.includes('invalid api token')) {
            throw new Error('API token is invalid or not configured. Please check your environment variables.');
        }
        throw new Error(`Error retrieving documents: ${error.message}`);
    }
}