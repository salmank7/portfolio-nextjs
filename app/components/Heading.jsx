import React from 'react'

const Heading = ({title, number}) => {
  return (
    <div className='flex items-end gap-2 py-10'>
        <div className='text-lg md:text-2xl'>
            {number}
        </div>
        <div className='text-3xl md:text-5xl font-bold'>
            {title}
        </div>
    </div>
  )
}

export default Heading