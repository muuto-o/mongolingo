import { z } from 'zod';

const envSchema = z.object({
  VITE_APP_TITLE: z.string(),
  VITE_API_URL: z.string().url(),
});

const parsedEnv = envSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  console.error('❌ Invalid environment variables:', parsedEnv.error.format());
  process.exit(1);
}

const env = parsedEnv.data;

export default env;
