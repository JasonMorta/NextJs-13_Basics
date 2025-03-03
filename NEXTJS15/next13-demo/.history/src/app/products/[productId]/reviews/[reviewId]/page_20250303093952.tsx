// Import React, which is needed for creating the component
import React from 'react'
import { notFound, redirect } from 'next/navigation'

// Define the ProductReview component as an async function
// This function accepts a prop 'params', which is a Promise that resolves to an object
// containing 'productId' and 'reviewId' as strings.
export default async function ProductReview({
  params
}: {
  // 'params' is expected to be a Promise that resolves to an object containing
  // 'productId' and 'reviewId' values (both are strings).
  params: Promise<{ 
    productId: string, 
    reviewId: string 
  }>
}) {
  
  // Wait for the Promise (params) to resolve and destructure the values
  // of 'productId' and 'reviewId' from the resolved object.
  const { productId, reviewId } = await params

  if (parseInt(productId) > 50) {
     notFound()
     redirect('/products')
  }
  
  // Return JSX that renders an <h1> tag displaying both the reviewId and productId
  // for this specific product review.
  return (
    <h1>Review ID: {reviewId}. Product ID: {productId}</h1>
  )
}
