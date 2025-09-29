import NewsList from '@/components/common/NewsList';
import { getLatestNews } from '@/lib/news'
import React from 'react'

export default function LatestPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={latestNews}/>
    </>
  )
}
