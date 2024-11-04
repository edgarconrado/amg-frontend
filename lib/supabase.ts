import { Database } from '@/types/db_types';
import { createClient } from '@supabase/supabase-js'
import Constants from 'expo-constants';

// const supabaseUrl = 'https://hwylqfrojpyvwbjlloig.supabase.co'
// const supabaseAnnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3eWxxZnJvanB5dndiamxsb2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzMDk2NjUsImV4cCI6MjA0NTg4NTY2NX0.X_-amE4SMp3QKtnccO7SCcE-J3L2q_8-07DuXV1cTnw'

const supabaseUrl = Constants?.expoConfig?.extra?.supabaseUrl
const supabaseAnnonKey = Constants?.expoConfig?.extra?.supabaseAnnonKey

export const supabase = createClient<Database>(supabaseUrl, supabaseAnnonKey);