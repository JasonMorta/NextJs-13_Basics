"use client"

import { usePathname } from 'next/navigation'
import React from 'react'


export default function notFound() {
  const pathname = usePathname()
  const productId = pathname.split('/')[2]
  const reviewId = pathname.split('/')[4]


  return (
    <div>Review {reviewId} Not Found for {productId}</div>
  )

}
