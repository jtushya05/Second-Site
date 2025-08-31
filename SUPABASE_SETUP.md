# Supabase Setup Guide for EA Global Referral System

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/sign in
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: `ea-global-referral-system`
   - Database Password: (create a strong password)
   - Region: Choose closest to your users
5. Click "Create new project"

## 2. Configure Database Schema

1. In your Supabase dashboard, go to the "SQL Editor"
2. Copy the contents of `database/schema.sql` from this project
3. Paste it into the SQL Editor and click "Run"
4. This will create all the necessary tables and relationships

## 3. Get Your Supabase Keys

1. In your Supabase dashboard, go to "Settings" → "API"
2. Copy the following values:
   - **URL**: Your project URL (e.g., `https://abc123def456.supabase.co`)
   - **anon public key**: Your public API key (starts with `eyJ`)
   - **service_role key**: Your service role key (for server-side operations)

## 4. Update Environment Variables

Update your `.env.local` file with your Supabase credentials:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
```

## 5. Database Tables Created

The schema creates the following tables:

### `users`
- Stores user information from Google Sign-In
- Primary key for all other tables

### `referral_codes`
- Stores generated referral codes
- Links to users table
- Tracks code type (ambassador/campus_guide/general)

### `referral_tracking`
- Tracks all referral link clicks and usage
- Stores UTM parameters and analytics data

### `lead_captures`
- Stores lead form submissions
- Links to referral codes for attribution

### `ambassador_registrations`
- Stores ambassador program registrations
- Links to users and referral codes

### `campus_guide_registrations`
- Stores campus guide program registrations
- Links to users and referral codes

## 6. Row Level Security (RLS)

The schema includes basic RLS policies that allow all operations. You may want to customize these based on your security requirements:

```sql
-- Example: Restrict users to only see their own data
CREATE POLICY "Users can only see their own data" ON users 
FOR ALL USING (auth.uid()::text = id::text);
```

## 7. Testing the Database Integration

1. Start your development server: `pnpm dev`
2. Navigate to `/ambassador-circle` or `/campus-guides`
3. Complete a registration
4. Check your Supabase dashboard → "Table Editor" to see the data

## 8. Analytics and Reporting

You can query your data directly in the Supabase SQL Editor:

```sql
-- Get all referral codes and their click counts
SELECT 
  rc.code,
  rc.type,
  u.full_name,
  COUNT(rt.id) as click_count
FROM referral_codes rc
LEFT JOIN users u ON rc.user_id = u.id
LEFT JOIN referral_tracking rt ON rc.code = rt.referral_code
GROUP BY rc.code, rc.type, u.full_name
ORDER BY click_count DESC;

-- Get conversion rates
SELECT 
  rc.code,
  rc.type,
  COUNT(DISTINCT rt.id) as clicks,
  COUNT(DISTINCT lc.id) as conversions,
  CASE 
    WHEN COUNT(DISTINCT rt.id) > 0 
    THEN (COUNT(DISTINCT lc.id)::float / COUNT(DISTINCT rt.id) * 100)
    ELSE 0 
  END as conversion_rate
FROM referral_codes rc
LEFT JOIN referral_tracking rt ON rc.code = rt.referral_code
LEFT JOIN lead_captures lc ON rc.code = lc.referral_code
GROUP BY rc.code, rc.type;
```

## 9. Backup Strategy

Your Google Forms will continue to work as a backup even if Supabase is down. The system is designed to fail gracefully:

1. **Primary**: Data saved to Supabase database
2. **Backup**: Data saved to Google Forms
3. **Fallback**: LocalStorage tracking continues

## 10. Future Enhancements

With the database in place, you can now:

1. **Build Admin Dashboard**: Create admin pages to view registrations
2. **Real-time Analytics**: Use Supabase realtime features
3. **Advanced Reporting**: Build comprehensive analytics
4. **User Authentication**: Integrate with Supabase Auth
5. **Approval Workflows**: Add approval processes for ambassadors
6. **Email Notifications**: Trigger emails on new registrations

## Troubleshooting

### Connection Issues
- Check that your environment variables are correctly set
- Ensure your Supabase project is active
- Verify your API keys are correct

### Permission Errors
- Check RLS policies if you modify them
- Ensure service role key is used for server-side operations

### Data Not Appearing
- Check browser console for errors
- Verify table names match the schema
- Check Supabase logs in the dashboard

## Cost Considerations

Supabase free tier includes:
- Up to 50MB database
- 50,000 monthly API requests
- 2GB bandwidth

This should be sufficient for initial development and testing. Monitor usage in the Supabase dashboard.
