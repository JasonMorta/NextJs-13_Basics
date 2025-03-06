"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Blog() {
  const route = useRouter();

  // bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
  const styles = {
    backgroundColor: 'transparent',
    color: 'blue',
    fontWeight: 'bold',
    padding: '10px 20px',
    border: '1px solid blue',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px 0'
  }
  return (
    
    <>
    <button 
    style={styles}
     onClick={() => route.back()}>Go back</button>
    <h1>Blog page</h1>
    </>
  )
}
