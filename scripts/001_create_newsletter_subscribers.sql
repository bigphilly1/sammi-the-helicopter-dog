-- Create newsletter_subscribers table for Book 2 email signups
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  source TEXT DEFAULT 'website'
);

-- Enable RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for newsletter signups without login)
CREATE POLICY "Anyone can subscribe to newsletter" 
  ON public.newsletter_subscribers 
  FOR INSERT 
  WITH CHECK (true);

-- Only service role can read/update/delete (for admin purposes)
CREATE POLICY "Service role can read subscribers" 
  ON public.newsletter_subscribers 
  FOR SELECT 
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role can delete subscribers" 
  ON public.newsletter_subscribers 
  FOR DELETE 
  USING (auth.role() = 'service_role');
