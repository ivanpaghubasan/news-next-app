import NewsList from "@/components/common/NewsList";
import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

export default function NewsPage() {
  
  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">News Page</h1>
      <NewsList news={DUMMY_NEWS}/>
    </div>
  );
}
