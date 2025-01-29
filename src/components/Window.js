import React, { useState } from 'react'

function Window() {
    const [show, setShow] = useState(false)
  return (
    <div>
        <button onClick={(e)=>{e.stopPropagation(); setShow(true)}}>Appear</button>
        {show && 
        <div onMouseDown={()=>setShow( show ? !show : show)} className=' absolute top-0 w-screen h-screen'>
          <div onMouseDown={(e)=>{e.stopPropagation();console.log('clicked!!!')}} className=' relative top-5 w-1/2  h-48  bg-blue-600'>
            <div className=' w-full h-full flex justify-center items-center'>
              <p>Hello world</p>
            </div>
          </div>
        </div>}
    </div>

  )
}

export default Window