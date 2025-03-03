import React from 'react'

export default function OrderProduct() {

  const handleClick = () => {
    alert('Product Ordered')
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
