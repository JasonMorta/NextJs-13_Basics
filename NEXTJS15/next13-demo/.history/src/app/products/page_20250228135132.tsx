import Link from 'next/link'
import React from 'react'

export default function Products() {

  const productId = 40


  /*
  The 'replace' prop is used to replace the current entry in the history stack. 
   <Link href={`/products/2`} replace>Product 2</Link>

  */

   const navLinks = [
    {href: `/products/${productId}`, name: `Register`},
    {href: `/products/2`, name: `Login`},
    {href: `/products/3`, name: `Forgot Password`}
   ]

  return (
    <>
    <h1>Products page</h1>
    <Link href="/">Home</Link>
    <ul>
      <li><Link href={`/products/${productId}`}>Product {productId}</Link></li>
      <li><Link href={`/products/2`}>Product 2</Link></li>
      <li>Product 3</li>
    </ul>

    <h2>Navigation Links</h2>
    <ul>
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
    </>
  )
}
