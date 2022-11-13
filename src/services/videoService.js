import { createClient } from "@supabase/supabase-js"

const PROJECT_URL = "https://djywrecgxfatnhgkwbwx.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqeXdyZWNneGZhdG5oZ2t3Ynd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNTExMDUsImV4cCI6MTk4MzkyNzEwNX0.GbsY5Ze0zY-VH9N3K29F0Xrgl4scE3tcsDZe88lQclY";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY); 

export function videoService() {
  return {
    getAllVideos() {
     return supabase.from("video")
        .select("*");        
    },
  };
}
