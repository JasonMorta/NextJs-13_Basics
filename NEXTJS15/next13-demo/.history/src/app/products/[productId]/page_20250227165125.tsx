import React from 'react'

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>

}) {
  const  productId  = (await params).productId
  return (
    <h1>Product details: Product {productId}</h1>
  )
}
