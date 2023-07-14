import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mhvaudkjbregorhvobit.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1odmF1ZGtqYnJlZ29yaHZvYml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwMDc0ODksImV4cCI6MjAwNDU4MzQ4OX0.-E0sRGUA7ELr3Ofqz1d8Hfl7t7AKI04Qz0LjE3wGSYU';

console.log(`process`, process.env.REACT_APP_SUPABASE_URL)


const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
