"use client"

import { usePathname } from 'next/navigation'
import React from 'react'


export default function notFound() {
  const pathname = usePathname()
  return (
    <div>Review Not Found: {pathname}</div>
  )

}
