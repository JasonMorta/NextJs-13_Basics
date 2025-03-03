import Link from 'next/link'
import React from 'react'

export default function Products() {

  const productId = 40

  return (
    <>
    <h1>Products page</h1>
    <Link href="/">Home</Link>
    <ul>
      <li><Link href={`/products/${productId}`}>Product {productId}</Link></li>
      <li>Product 2</li>
      <li>Product 3</li>
    </ul>
    </>
  )
}
