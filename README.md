# Giatech Shipping Tracker (Template)

This is a ready-to-deploy Next.js template for the Giatech Shipping Tracker.

## What is included
- Client tracking page with map placeholder and chat
- Admin panel to create/update shipments and send messages
- Supabase integration hooks (fill in your keys)
- PWA support (manifest, service worker)
- Web Push example (serverless API endpoints)

## Setup
1. Install dependencies:
   ```
   npm install
   ```

2. Create a Supabase project and run the SQL provided in the docs to create tables:
   - shipments (id, tracking_id, status, location, latitude, longitude, expected, tracking_enabled, created_at)
   - messages (id, shipment_id, sender, content, created_at)
   - subscriptions (id, shipment_id, subscription)

3. Copy `.env.local.example` -> `.env.local` and fill values:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - NEXT_PUBLIC_VAPID_PUBLIC_KEY
   - VAPID_PRIVATE_KEY

4. Run locally:
   ```
   npm run dev
   ```

5. Deploy on Vercel (add env vars in Vercel dashboard).

This is a template — adapt UI and security (use Supabase Auth) for production.
