"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Blog() {
  const route = useRouter();
  return (
    
    <>
    <button 
    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
     onClick={() => route.back()}>Go back</button>
    <h1>Blog page</h1>
    </>
  )
}
