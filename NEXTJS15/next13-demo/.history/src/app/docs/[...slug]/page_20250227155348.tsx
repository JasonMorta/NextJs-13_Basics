import React from "react";

export default async function Docs({params}: {params: Promise<{ slug: string[] }>}) {

  const { slug } = await params;
  return <div>Docs page</div>;
}
