import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";
import React from "react";

export default function ArchivePage() {
  const years = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {years.map((year) => (
            <Link href={`/archive/${year}`} key={year}>
              {year}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
