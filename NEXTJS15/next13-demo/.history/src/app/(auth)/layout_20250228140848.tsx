"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function AuthLayout({ children, }: { children: React.ReactNode }) {

  const pathName = usePathname()


  const navLinks = [
    { href: `/register`, name: `Register` },
    { href: `/login`, name: `Login` },
    { href: `/forgot-password`, name: `Forgot Password` }
  ]
  return (
    <>
      <Link href="/">Home</Link><br />
      <h2>Navigation Links</h2>
      <ul>
        {navLinks.map((link, index) => {
          const isActive = pathName === link.href

          return (<li key={index}>
            <Link
              style={{
                color: isActive ? `red` : `blue`
              }}
              href={link.href}>
              {link.name}
            </Link>
          </li>)

        })}
      </ul>

      {children}
    </>
  )
}