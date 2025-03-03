"use client";
import Link from 'next/link'
import React from 'react'
import {use} from "react"

export default function articles({params, searchParams}:
  {
    params: Promise<{articleId: string}>,
    searchParams: Promise<{lang?: string}>
  }
) {

  const {articleId} =  use(params)
  const {lang = 'en'} =  use(searchParams)


  return (
    <div>
        <Link href="/">Home</Link>
      <h1>Article {articleId}</h1>
      <p>Reading in language: {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <br />
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
      </div>

    
    </div>
  )
}