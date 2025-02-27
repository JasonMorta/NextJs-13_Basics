import React from 'react'

export default function ProductDetailLayout({
  children
}: {children: React.ReactNode}) { 
  return (
    <>
    {children}
    <h3>Featured Products</h3>
    </>
  )
}
