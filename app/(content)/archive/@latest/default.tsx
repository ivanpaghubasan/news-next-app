import NewsList from '@/components/common/NewsList';
import { getLatestNews } from '@/lib/news'
import React from 'react'

export default async function LatestPage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={latestNews}/>
    </>
  )
}
