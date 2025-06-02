-- Create veille_articles table
create table if not exists public.veille_articles (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  content text not null,
  summary text,
  keywords text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  last_modified_at timestamp with time zone,
  last_modified_by text,
  published_at timestamp with time zone,
  source text,
  status text default 'draft'::text
);

-- Enable Row Level Security
alter table public.veille_articles enable row level security;

-- Drop existing policies if they exist
drop policy if exists "Enable read access for all users" on public.veille_articles;
drop policy if exists "Enable insert for authenticated users only" on public.veille_articles;
drop policy if exists "Enable update for authenticated users only" on public.veille_articles;
drop policy if exists "Enable delete for authenticated users only" on public.veille_articles;

-- Create policies
create policy "Enable read access for all users" on public.veille_articles
  for select using (true);

create policy "Enable insert for authenticated users only" on public.veille_articles
  for insert with check (auth.role() = 'authenticated');

create policy "Enable update for authenticated users only" on public.veille_articles
  for update using (auth.role() = 'authenticated');

create policy "Enable delete for authenticated users only" on public.veille_articles
  for delete using (auth.role() = 'authenticated');

-- Grant permissions
grant all on public.veille_articles to authenticated;
grant all on public.veille_articles to service_role;

-- Create indexes
create index if not exists veille_articles_status_idx on public.veille_articles(status);
create index if not exists veille_articles_created_at_idx on public.veille_articles(created_at);
create index if not exists veille_articles_published_at_idx on public.veille_articles(published_at); 