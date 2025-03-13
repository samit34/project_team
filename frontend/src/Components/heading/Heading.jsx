import React from 'react'

const Heading = ({props}) => {
  return (
    <div className='mx-auto p-5 flex items-center justify-center '>
        <h1 className='text-5xl font-bold bg-gradient-to-r from-[#ead6e4] to-[#FFB200] bg-clip-text text-transparent capitalize' >{props}</h1>
    </div>
  )
}

export default Heading