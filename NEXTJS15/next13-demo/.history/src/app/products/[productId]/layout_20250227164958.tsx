import React from 'react'

export default function ProductDetailLayout({
  children
}: {children: React.ReactNode}) { 
  return (
    <>
    {children}
    <h1>Featured Products</h1>
    </>
  )
}
