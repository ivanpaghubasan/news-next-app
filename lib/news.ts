import { monthsListSchema, News, newsListSchema, newsSchema, yearsListSchema } from '@/schemas/newsSchema';
import sql from 'better-sqlite3';

const db = sql('data.db');

export async function getAllNews(): Promise<News[]> {
  const news = db.prepare('SELECT * FROM news').all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const parsed = newsListSchema.safeParse(news);
   if (!parsed.success) {
    throw new Error("Error getting news years data.");
  }

  return parsed.data;
}

export async function getNewsItem(slug: string): Promise<News> {
  const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const parsed = newsSchema.safeParse(newsItem);
  if (!parsed.success) {
    throw new Error("Error getting news data." + parsed.error.message);
  }

  return parsed.data;
}

export async function getLatestNews(): Promise<News[]> {
  const latestNews = db
    .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const parsed = newsListSchema.safeParse(latestNews)
  if (!parsed.success) {
    throw new Error("Error getting news data.");
  }

  return parsed.data;
}

export async function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const parsed = yearsListSchema.safeParse(years);
   if (!parsed.success) {
    throw new Error("Error getting news years data.");
  }

  return parsed.data.map((year) => year.year);
}

export function getAvailableNewsMonths(year: string) {
  const months = db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year);
  
  const parsed = monthsListSchema.safeParse(months);
   if (!parsed.success) {
    throw new Error("Error getting news years data.");
  }

  return parsed.data.map((month) => month.month);
}

export async function getNewsForYear(year: string): Promise<News[]> {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const parsed = newsListSchema.safeParse(news);
  if (!parsed.success) {
    throw new Error("Error getting news years data.");
  }

  return parsed.data;
}

export async function getNewsForYearAndMonth(year: string, month: string): Promise<News[]> {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const parsed = newsListSchema.safeParse(news);
   if (!parsed.success) {
    throw new Error("Error getting news years data.");
  }

  return parsed.data;
}