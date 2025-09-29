import React from 'react'

type Props = {
  archive: React.ReactNode;
  latest: React.ReactNode;
}

export default function ArchiveLayout({ archive, latest }: Props) {
  return (
    <div>
      <h1 className='text-3xl mb-5'>News Archive</h1>
      {archive}
      <hr />
      {latest}
    </div>
  )
}
