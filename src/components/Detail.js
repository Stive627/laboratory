import React from 'react'

function Detail({title, value}) {
  return (
    <>
    <div className=' w-full flex justify-between '>
        <p>{title}</p>
        <p className=' font-bold'>{value}</p>
    </div>
    <hr/>
    </>
  )
}

export default Detail