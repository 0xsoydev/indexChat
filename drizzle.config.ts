import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: ['./db/schema.ts', './auth-schema.ts'],
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL as string,
    },
})