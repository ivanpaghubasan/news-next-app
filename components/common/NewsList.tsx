import { News } from "@/schemas/newsSchema";
import Link from "next/link";
import React from "react";

type Props = {
  news: News[]
}

export default function NewsList({ news }: Props) {
  
  return (
    <ul className="news-list">
      {news.map((news) => (
        <li key={news.id}>
          <Link href={`/news/${news.slug}`}>
            <img src={`/images/news/${news.image}`} alt={news.title} />
            <span>{news.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
