import Link from 'next/link'
import React from 'react'

export default function login() {
  return (
    <>
    <Link href="/">Home</Link><br />
    <h1>Login page</h1>
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
    </>
  )
}
