import Link from 'next/link'
import React from 'react'

export default function forgotPassword() {
  return (
    <>
    <Link href="/">Home</Link><br />
    <h1>Login page</h1>
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <br />
      <br />

      <button type="submit">Reset</button>
    </form>
    </>
  )
}
