import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='flex justify-between p-4' >
      <h1 className='font-bold text-8'>{title}</h1>
      <h2>Welcome back, <strong>Matheus</strong> </h2>
    </div>
  )
}

export default Header