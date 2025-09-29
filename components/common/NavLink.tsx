'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

type Props = {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={pathname.startsWith(href) ? 'active' : undefined}
    >
      {children}
    </Link>
  )
}
