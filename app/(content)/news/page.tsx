import NewsList from "@/components/common/NewsList";
import { getAllNews } from "@/lib/news";

import React from "react";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">News Page</h1>
      <NewsList news={news}/>
    </div>
  );
}
