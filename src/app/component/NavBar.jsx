'use client'
import React from 'react'
import NavBarItem from './NavBarItem'

const NavBar = () => {
  return (
    <div className='flex justify-center gap-7 bg-amber-100 p-3'>
      <NavBarItem title='TopTrending' param='feachTopTrending' />
      <NavBarItem title='TopRated' param='feachTopRated' />
    </div>
  )
}

export default NavBar
