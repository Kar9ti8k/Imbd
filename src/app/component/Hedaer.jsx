'use client'
import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { FcAbout } from 'react-icons/fc'
const Hedaer = () => {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
      <div className='flex gap-4'>
        <MenuItem title='Home' address='/' Icon={AiFillHome} />
        <MenuItem title='About' address='/About' Icon={FcAbout} />
      </div>
      <div className='flex gap-1 items-center'>
        <span className='text-2xl font-bold bg-amber-500 py-1 px-1 rounded-[0.5rem] '>
          IMDB
        </span>
        <p className='text-2xl hidden sm:inline'>Clone</p>
      </div>
    </div>
  )
}

export default Hedaer
