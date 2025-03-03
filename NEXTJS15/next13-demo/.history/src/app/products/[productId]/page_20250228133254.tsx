// Import the Metadata type from Next.js, which is used to define page metadata.
import { Metadata } from "next";

// Define a TypeScript type for the props expected by the component and metadata generator.
type Props = {
  // 'params' is a Promise that resolves to an object containing 'productId' as a string.
  params: Promise<{ productId: string }>;
};

// Async function to generate metadata dynamically for a page.
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  // Await the resolution of 'params' to extract 'productId'.
  const id = (await params).productId;

  // Simulate an asynchronous operation (e.g., fetching product details) with a delay of 1 second.
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 5000);
  });

  // Return an object containing the page title dynamically set based on 'productId'.
  return {
    title: `Product ${title}`
  };
};

// Default exported async function that represents the product details page.
export default async function ProductDetails({ params }: Props) {
  // Extract 'productId' by awaiting the resolution of 'params'.
  const productId = (await params).productId;

  // Return an H1 element displaying the product details.
  return (
    <h1>Details about product {productId}</h1>
  );
}
