"use client";

import { useRouter } from "next/navigation";


export default function OrderProduct() {

  const router = useRouter()

  const handleClick = () => {
    alert('Product Ordered')
    router.push('/')
  }

  return (
    <div>
      <h1>Order Product</h1>
      <button
        onClick={handleClick}
      >
        Place Product
      </button>
    </div>
  )
}
