import React from 'react'

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function NewsDetailsLayout({ children, modal }: Props) {
  return (
    <>
      {modal}
      {children}
    </>
  )
}

