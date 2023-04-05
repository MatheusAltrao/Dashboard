import React from 'react'
import { data } from '../data/data.js'
import { ShoppingBag, DotsThree } from "@phosphor-icons/react";

import Header from '@/components/Header.jsx';

const orders = () => {
  return (
    <div>
      <Header title='Orders' />

      <div className='p-4' >
        <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>

            <span>Order</span>
            <span className='sm:text-left text-right'>Status</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
          </div>

          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >

                <div className='flex ' >
                  <div className='bg-purple-100 p-3 rounded-lg'>
                    <ShoppingBag className='text-purple-800 text-[26px]' />
                  </div>

                  <div className='pl-4' >
                    <p className='text-gray-800 font-bold' >${order.total}</p>
                    <p className='text-gray-500 font-bold text-sm' >{order.name.first}</p>
                  </div>
                </div>

                <p className='text-gray-900 sm:text-left text-right uppercase font-bold' >
                  <span className={
                    order.status == 'Processing' ? 'bg-yellow-200 p-2 rounded-lg'
                      : order.status == 'Completed' ? 'bg-green-200 p-2 rounded-lg'
                        : 'bg-red-200 p-2 rounded-lg'
                  } >{order.status}
                  </span>
                </p>

                <p className='hidden md:flex' > {order.date} </p>

                <div className='sm:flex hidden items-center justify-between' >
                  <p>{order.method}</p>
                  <DotsThree className='text-[1.5rem] cursor-pointer' />
                </div>

              </li>
            ))}
          </ul>

        </div>
      </div>
    </div >
  )
}

export default orders