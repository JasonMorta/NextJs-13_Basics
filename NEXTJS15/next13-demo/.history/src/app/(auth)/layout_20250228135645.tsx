import Link from "next/link"

export const layout: React.FC<{}> = () => {
  const navLinks = [
    {href: `register`, name: `Register`},
    {href: `/login`, name: `Login`},
    {href: `/forgot-password`, name: `Forgot Password`}
   ]
  return (
    <>
      <h2>Navigation Links</h2>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}