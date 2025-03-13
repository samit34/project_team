import React from 'react'

const Heading = ({props}) => {
  return (
    <div className='mx-auto p-5 flex items-center justify-center '>
        <h1 className='text-2xl xl:text-4xl font-semibold bg-gradient-to-r from-[#f4ade2] to-[#FFB200] bg-clip-text text-transparent'>{props}</h1>
    </div>
  )
}

export default Heading