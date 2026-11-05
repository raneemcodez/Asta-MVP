import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <h1>Home page</h1>
      <li>
        <Link href="/poc">poc</Link>
      </li>
    </>
  )
}

export default page
