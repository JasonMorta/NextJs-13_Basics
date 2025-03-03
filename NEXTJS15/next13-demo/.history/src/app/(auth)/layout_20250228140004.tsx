import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  const navLinks = [
    {href: `/register`, name: `Register`},
    {href: `/login`, name: `Login`},
    {href: `/forgot-password`, name: `Forgot Password`}
   ]
  return (
    <>
      <h2>Navigation Links</h2>
      <ul>
        {navLinks.map((link, index) => (
         <ul>
            <li key={index}>
              <Link href={link.href}>{link.name}</Link>
            </li>
         </ul>
        ))}
      </ul>
    </>
  )
}