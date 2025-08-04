import Link from 'next/link'
import React from 'react'

const NotFountPage404 = () => {
  return (
    <div className='flex justify-center items-center h-full w-full'>
        <h1>404 Not Fount</h1>
        <Link href={'/'}>Go Back to Home</Link>
    </div>
  )
}

export default NotFountPage404