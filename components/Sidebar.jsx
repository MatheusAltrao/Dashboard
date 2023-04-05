import Link from 'next/link'
import React from 'react'
import { DiamondsFour, SquaresFour, User, ShoppingBag, Gear } from "@phosphor-icons/react";


const Sidebar = ({ children }) => {
  return (
    <div className='flex' >

      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between ' >

        <div className='flex flex-col items-center gap-8' >

          <Link href='/'>
            <div className=' p-1 rounded-md '>
              <DiamondsFour className='iconSidebar active' />
              <div className='w-full h-[2px] bg-gray-200 rounded-md mt-4' ></div>
            </div>
          </Link>

          <Link href='/'>
            <div className=' p-1 rounded-md'>
              <SquaresFour className='iconSidebar' />
            </div>
          </Link>


          <Link href='/customers'>
            <div className=' p-1 rounded-md'>
              <User className='iconSidebar' />
            </div>
          </Link>


          <Link href='/orders'>
            <div className=' p-1 rounded-md'>
              <ShoppingBag className='iconSidebar' />
            </div>
          </Link>



        </div>

      </div>

      <main className='ml-20 w-full' >{children}</main>
    </div>
  )
}

export default Sidebar