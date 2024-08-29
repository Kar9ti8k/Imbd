import React from 'react'
import Link from 'next/link'

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link href={address} className='hover:text-amber-500'>
      <Icon className='sm:hidden text-3xl' />
      <p className='uppercase hidden sm:inline'>{title}</p>
    </Link>
  )
}

export default MenuItem
