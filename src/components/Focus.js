import React from 'react'
import { useDimension } from '../hooks/useDimension'

function Focus() {
  const {width} = useDimension()
  return (
    <div className=' grid grid-cols-9 w-screen h-screen'>
        {width > 450 && <div className=' bg-blue-600 col-span-2'></div>}
        <div className={` bg-green-600 ${width < 450 ? 'col-span-9' : 'col-span-7'}`}></div>
    </div>
  )
}

export default Focus