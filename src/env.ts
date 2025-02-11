import { z } from 'zod'

const envSchema = z.object({
  MODE: z.enum(['development', 'production', 'test']),
  VITE_API_BASE_URL: z.string(),
  VITE_ENABLED_API_DELAY: z.string().transform((value) => value === 'true'),
})

export const env = envSchema.parse(import.meta.env)
