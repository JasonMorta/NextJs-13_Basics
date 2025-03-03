import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section>
      <h1>Welcomes Homes</h1>
      <Link href="/blog">Blog Page</Link><br />
      <Link href="/products">Product Page</Link><br />
      <Link href="/register">Register</Link>
    </section>
  )
}
