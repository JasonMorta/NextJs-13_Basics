import React from 'react'

export default async function ProductReview({
  params
}:{
  params: Promise<{ productId: string, reviewId: string }>
}) {

  const { productId, reviewId } = await params
  return (
    <h1>Review ID:{reviewId}.  Product{productId}</h1>
  )
}
