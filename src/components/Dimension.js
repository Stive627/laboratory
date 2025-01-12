import React from 'react'
import { useDimension } from '../hooks/useDimension'
import Value from './Value'

function Dimension() {
    const {height, width} = useDimension()
  return (
    <div className=' flex justify-center items-center w-screen h-screen'>
        <div className=' border border-blue-500 p-5 w-1/3'>
        <Value value={'Height'} number={height}/>
        <hr className=' my-2 bg-blue-200'/>
        <Value value={'Width'} number={width}/>    
        </div>
    </div>
  )
}

export default Dimension