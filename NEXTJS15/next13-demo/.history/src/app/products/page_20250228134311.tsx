import Link from 'next/link'
import React from 'react'

export default function Products() {
  return (
    <>
    <h1>Products page</h1>
    <Link href="/">Home</Link>
    <ul>
      <li><Link href="/product/1">Product 1</Link></li>
      <li>Product 2</li>
      <li>Product 3</li>
    </ul>
    </>
  )
}
