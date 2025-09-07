import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <div className='space-x-5 text-center py-5'>
        <Link href={'/services/web-dev'}>Web Dev</Link>
        <Link href={'/services/seo'}>SEO</Link>
    </div>
  )
}

export default Services