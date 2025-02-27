// Import React, which is required for creating React components.
import React from "react";

// Define an async React functional component called 'Docs'.
// This component receives a prop 'params', which is a Promise that resolves to an object.
// The object contains 'slug', which is an array of strings.
export default async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {

  // Wait for the 'params' Promise to resolve and destructure 'slug' from it.
  const { slug } = await params;
  
  // Log the resolved slug to the console for debugging.
  console.log('slug', slug);

  // The 'slug' array holds parts of a dynamic URL.
  // - Example: If the URL is `/docs/react/hooks`, then slug = ["react", "hooks"].
  // - It helps determine which specific documentation page to display.

  // Check if the 'slug' array contains exactly two elements.
  if (slug?.length === 2) {
    return (
      <h1>Viewing docs for feature {slug[1]} and {slug[0]}</h1>
    );
  } 
  // If the 'slug' array contains exactly one element.
  else if (slug?.length === 1) {
    return (
      <h1>Viewing docs for feature {slug[0]}</h1>
    );
  }

  // Default return statement when 'slug' is either empty or undefined.
  return (
    <h1>Viewing docs page</h1>
  );
}
