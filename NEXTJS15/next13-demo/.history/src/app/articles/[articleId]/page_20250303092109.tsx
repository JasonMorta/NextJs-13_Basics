import Link from 'next/link'
import React from 'react'

export const page: React.FC<{}> = () => {
  return (
    <div>
      <h1>Article</h1>
      <p>Reading in language</p>

      <div>
        <Link href="/articles/id?lang=en">English</Link>
        <br />
        <Link href="/articles/id?=lang=es">Spanish</Link>
      </div>
    </div>
  )
}