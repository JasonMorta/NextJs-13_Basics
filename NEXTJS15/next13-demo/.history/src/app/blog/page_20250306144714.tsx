"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Blog() {
  const route = useRouter();
  return (
    
    <>
    <button onClick={() => route.back()}>Go back</button>
    <h1>Blog page</h1>
    </>
  )
}
