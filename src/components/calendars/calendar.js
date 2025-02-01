import React from 'react'
import Month from './Month'

function calendar() {
  return (
    <div className = ' w-screen h-screen'>
        <div className=' w-1/2  h-full'>
            <h1>TNexon calendar</h1>
            <Month/>
        </div>
    </div>
  )
}

export default calendar