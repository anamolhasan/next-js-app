import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul className='flex justify-center gap-5 py-5 bg-blue-600 '>
          <Link href={'/'}> <li>Home</li> </Link>
          <Link href={'/services'}> <li>Services</li> </Link>
          <Link href={'/about'}> <li>About</li> </Link>
        </ul>
    </div>
  )
}

export default Navbar