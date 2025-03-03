"use client"; // This directive enables Client Components in Next.js, ensuring this code runs in the browser.

// Import the useRouter hook from Next.js navigation to programmatically control routing.
import { useRouter } from "next/navigation";

// Define the OrderProduct component as the default export.
export default function OrderProduct() {
  
  // Initialize the useRouter hook to gain access to Next.js navigation functions.
  const router = useRouter();

  // Function to handle button click event.
  const handleClick = () => {
    alert('Product Ordered'); // Display an alert to the user confirming the order.

    router.push('/'); // Navigate the user to the homepage after placing an order.

    // Alternative navigation methods (commented out for reference):
    // router.forward();  // Moves forward in the browser history (not commonly used).
    // router.back();     // Moves back in the browser history.
    // router.reload();   // Reloads the current page.
    // router.replace('/products'); // Replaces the current history entry with '/products' (without adding to history stack).
  };

  // Render the UI elements
  return (
    <div>
      <h1>Order Product</h1> {/* Heading for the page */}
      <button onClick={handleClick}> {/* Button that triggers handleClick when clicked */}
        Place Product
      </button>
    </div>
  );
}
