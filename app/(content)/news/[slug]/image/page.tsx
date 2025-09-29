import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ImagePage({ params }: Props) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!newsItem)
    notFound();

  return (
    <div className='fullscreen-image'>
      <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
    </div>
  )
}
