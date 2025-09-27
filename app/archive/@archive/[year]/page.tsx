import NewsList from '@/components/common/NewsList'
import { getNewsForYear } from '@/lib/news';
import React from 'react'

type Props = {
  params: Promise<{
    year: string;
  }>;
}

export default async function FilteredNewsPage({ params }: Props) {
  const { year } = await params;
  const news = getNewsForYear(Number(year));

  return (
    <NewsList news={news} />
  )
}
