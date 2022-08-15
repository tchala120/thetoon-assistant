import { createClient } from '@supabase/supabase-js'

const key =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
const url = process.env.NEXT_PUBLIC_SUPABASE_URL

// Create a single supabase client for interacting with your database
const supabase = createClient(url, key)

export default supabase
