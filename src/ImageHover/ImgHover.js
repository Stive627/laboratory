import React, { useState } from 'react'

function ImgHover() {
    const [show, setShow] = useState(false)
  return (
    <div className='relative'>
        <img onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}  onm alt='img' src='http://localhost:3001/public/medias/logo.png' className=' w-64 h-64'/>
        {show && <div onMouseMove={() => setShow(true)} onMouseLeave={() => setShow(false)} className=' absolute top-0  left-0 right-0 w-64 h-64 bg-black'></div>}    
    </div>
  )
}

export default ImgHover