import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Only log in development and when running in browser
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('Supabase URL:', supabaseUrl ? 'Set' : 'Missing')
  console.log('Supabase Key:', supabaseAnonKey ? 'Set' : 'Missing')
}

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null
