import React from "react";

export default async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {

  const { slug } = await params;
  console.log('slug', slug)
  if (slug?.length === 2) {
    return (<h1>Viewing docs for feature {slug[1]} and {slug[0]}</h1>)
  } else if (slug?.length === 1) {
    return (<h1>Viewing docs for feature {slug[0]}</h1>)
  }

  return (<h1>Viewing docs page</h1>)

}
