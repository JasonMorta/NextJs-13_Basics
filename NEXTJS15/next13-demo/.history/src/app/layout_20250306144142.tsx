"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
          <h1>Welcome to Next.js</h1>
          <br />
          <Link style={{ color: 'white', marginRight: '1rem' }} href="/">Home</Link>
          <a style={{ color: 'white', cursor: 'pointer' }} onClick={() => router.back()}>Go Back</a>
        </header>

        <main style={{
          minHeight: 'calc(80vh - 6rem)',
        }}>{children}</main>

        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center', marginTop: 'auto' }}>
          <p>&copy; 2023 Next.js Demo</p>
        </footer>
      </body>
    </html>
  );
}
