import Link from 'next/link'
import React from 'react'

export default async function articles({params, searchParams}:
  {
    params: Promise<{articleId: string}>,
    searchParams: Promise<{lang?: string}>
  }
) {

  const {articleId} = await params
  const {lang = 'en'} = await searchParams


  return (
    <div>
      <h1>Article {articleId}</h1>
      <p>Reading in language</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <br />
        <Link href={`/articles/${articleId}?=lang=es`}>Spanish</Link>
      </div>
    </div>
  )
}