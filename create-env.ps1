$envContent = @"
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-jwt-key-here
SUPABASE_SERVICE_ROLE_KEY=your-jwt-key-here
ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-jwt-key-here
"@

$envContent | Out-File -FilePath ".env" -Encoding UTF8 -NoNewline
Write-Host "✅ Fichier .env créé avec succès" 