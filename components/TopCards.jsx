import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-4 p-4'>

      <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>

        <div className='flex flex-col w-full pb-4' >
          <p className='text-2xl font-bold ' >$7,677</p>
          <p className='text-gray-600' >Daily Revenue</p>
        </div>

        <span className='bg-green-200 flex justify-center items-center p-2 rounded-lg min-w-[70px] ' >
          <p className='text-green-700 text-lg' >+12%</p>
        </span>
      </div>

      <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4' >
          <p className='text-2xl font-bold ' >$1,432,553</p>
          <p className='text-gray-600' >YTD Revenue</p>
        </div>

        <span className='bg-green-200 flex justify-center items-center p-2 rounded-lg min-w-[70px] ' >
          <p className='text-green-700 text-lg' >+38%</p>
        </span>

      </div>

      <div className='lg:col-span-1 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4' >
          <p className='text-2xl font-bold ' >$11,682</p>
          <p className='text-gray-600' >Customer</p>
        </div>

        <span className='bg-green-200 flex justify-center items-center p-2 rounded-lg min-w-[70px] ' >
          <p className='text-green-700 text-lg' >+10%</p>
        </span>

      </div>
    </div>
  )
}

export default TopCards