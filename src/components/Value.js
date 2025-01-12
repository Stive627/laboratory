import React from 'react'

function Value({value, number}) {
  return (
    <div className=' flex justify-between'>
        <p className='text-[25px]'>{value}</p>
        <p className=' text-[25px] text-blue-600'>{number}</p>
    </div>
  )
}

export default Value