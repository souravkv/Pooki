
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://jnqunfgwwokqpyiihlul.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpucXVuZmd3d29rcXB5aWlobHVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxMzU1MzksImV4cCI6MjA0MzcxMTUzOX0.lNWOvmKpNa5nM9L15HUnLD3DVWfNMKFAhKnTCuPUrTE"

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })
        