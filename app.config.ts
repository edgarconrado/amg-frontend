import { ExpoConfig, ConfigContext } from 'expo/config';
import * as dotenv from 'dotenv';

dotenv.config();

export default({ config}: ConfigContext): ExpoConfig => {
    return {
        ...config,
        slug: 'amgfrontend',
        name: 'amg-frontend',
        extra: {
            ...config.extra,
            supabaseUrl: process.env.SUPABASE_URL,
            supabaseAnnonKey: process.env.SUPABASE_ANNON_KEY,
        }
    }
}