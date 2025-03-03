import React from 'react'

export default function register() {
  return (
    <>
    <h1>Register page</h1>
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <br />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <br />
      <button type="submit">Register</button>
    </form>
    </>
  )
}
