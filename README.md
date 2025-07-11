# RAG Chatbot

This is a RAG (Retrieval-Augmented Generation) chatbot built with Next.js, and various AI and database technologies.

## Features

* **Next.js 15:** Utilizes the latest features of the Next.js framework.
* **RAG Pipeline:** Implements a full RAG pipeline for intelligent, context-aware responses.
* **AI Integration:** Supports multiple AI providers including OpenAI, Google Generative AI, and Cohere.
* **Vector Database:** Uses `drizzle-orm` with PostgreSQL for efficient document storage and retrieval.
* **UI Components:** Built with `tailwindcss` and `lucide-react` for a modern and responsive user interface.

## Getting Started

### Prerequisites

* Node.js (v20 or higher)
* npm or yarn
* PostgreSQL database

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/balakganesh2k3/Rag-chatbot.git
   cd Rag-chatbot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root of the project and add the necessary environment variables. You'll need to include your database connection string and API keys for the AI services you want to use.

   ```env
   POSTGRES_URL=...
   OPENAI_API_KEY=...
   GOOGLE_API_KEY=...
   COHERE_API_KEY=...
   ```

4. **Run database migrations:**
   ```bash
   npm run db:migrate
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

* `npm run dev`: Starts the development server with Turbopack.
* `npm run build`: Builds the application for production.
* `npm run start`: Starts a production server.
* `npm run lint`: Lints the project files.
* `npm run db:generate`: Generates Drizzle ORM migration files.
* `npm run db:migrate`: Applies database migrations.
* `npm run db:rollback`: Rolls back the last database migration.
* `npm run db:push`: Pushes schema changes to the database without generating migrations.
* `npm run db:studio`: Opens the Drizzle ORM studio.
* `npm run db:drop`: Drops the database.

## Project Structure

```
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── fonts/
│       ├── GeistMonoVF.woff
│       └── GeistVF.woff
├── components/
│   ├── ai-chat.tsx
│   ├── document-uploader.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── db/
│   ├── index.ts
│   └── schema/
│       └── documents-data.ts
├── drizzle/
│   ├── 0000_orange_lady_bullseye.sql
│   └── meta/
│       ├── _journal.json
│       └── 0000_snapshot.json
├── hooks/
│   └── use-toast.ts
├── lib/
│   ├── utils.ts
│   └── rag/
│       ├── generate/
│       │   ├── generate-completion.ts
│       │   └── generate-embeddings.ts
│       ├── processing/
│       │   ├── process-document.ts
│       │   └── split-text.ts
│       └── retrieval/
│           ├── optimize-query.ts
│           ├── rerank-documents.ts
│           ├── retrieve-documents.ts
│           └── run-rag-pipeline.ts
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .gitignore
├── components.json
├── drizzle.config.ts
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── README.md
├── test-api.js
└── tsconfig.json
```

## Dependencies

* **@dqbd/tiktoken:** Tokenizer for GPT models.
* **@google/generative-ai:** Google Generative AI client library.
* **@next/env:** Environment variable loading for Next.js.
* **@radix-ui/react-slot:** Radix UI component for composing components.
* **@types/pg:** TypeScript types for the `pg` library.
* **ai:** Vercel AI SDK.
* **class-variance-authority:** Create flexible and reusable UI components.
* **clsx:** A tiny utility for constructing `className` strings conditionally.
* **cohere:** Cohere AI client library.
* **dotenv:** Loads environment variables from a `.env` file.
* **drizzle-kit:** CLI for Drizzle ORM.
* **drizzle-orm:** TypeScript ORM for SQL databases.
* **gpt-tokenizer:** Tokenizer for GPT models.
* **lucide-react:** A simply beautiful open-source icon set.
* **next:** The React framework for production.
* **openai:** OpenAI API client library.
* **pg:** PostgreSQL client for Node.js.
* **postgres:** PostgreSQL client for Node.js.
* **react:** A JavaScript library for building user interfaces.
* **react-dom:** React package for working with the DOM.
* **sonner:** An opinionated toast component for React.
* **tailwind-merge:** A utility for merging Tailwind CSS classes.
* **tailwindcss-animate:** A Tailwind CSS plugin for creating animations.
* **tiktoken:** A fast BPE tokeniser for use with OpenAI's models.

## Dev Dependencies

* **@eslint/eslintrc:** ESLint configuration file support.
* **@tailwindcss/postcss:** PostCSS plugin for Tailwind CSS.
* **@types/node:** TypeScript types for Node.js.
* **@types/react:** TypeScript types for React.
* **@types/react-dom:** TypeScript types for React DOM.
* **autoprefixer:** A PostCSS plugin to parse CSS and add vendor prefixes.
* **eslint:** An open-source static analysis tool for identifying problematic patterns found in JavaScript code.
* **eslint-config-next:** ESLint configuration for Next.js projects.
* **postcss:** A tool for transforming CSS with JavaScript.
* **tailwindcss:** A utility-first CSS framework for rapidly building custom designs.
* **typescript:** A typed superset of JavaScript that compiles to plain JavaScript.
