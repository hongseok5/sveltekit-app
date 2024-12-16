import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';
if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

export default defineConfig({

	out: "./drizzle",
	schema: "./src/db/schema.js",
	dbCredentials: {
		url: process.env.DATABASE_URL
	},

	verbose: true,
	strict: true,
	dialect: 'mysql'
});
