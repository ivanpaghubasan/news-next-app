import NewsList from "@/components/common/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import { News } from "@/schemas/newsSchema";
import Link from "next/link";
import React from "react";

type Props = {
  params: Promise<{
    filter: string[];
  }>;
};

export default async function FilteredNewsPage({ params }: Props) {
  const { filter } = await params;
  console.log({ filter });
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let news: News[] = [];
  let links = await getAvailableNewsYears();
  console.log({links})
  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = await getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent: React.JSX.Element = (
    <p>No news found for the selected period.</p>
  );

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if ((selectedYear && links.includes(selectedYear)) ||
    (selectedMonth && links.includes(selectedMonth))
  ) {
    throw new Error("Invalid filter");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((param) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${param}`
                : `/archive/${param}`;

              return (
                <Link href={href} key={param}>
                  {param}
                </Link>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
}
