import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section>
      <h1>Welcomes Homes</h1>
      <Link href="/blog">Blog Page</Link><br />
      <Link href="/products">First Blog Page</Link>
    </section>
  )
}
