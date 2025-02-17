import React from 'react'

function Square({value, handleChange,handlekey, active}) {
    console.log(active)
  return (
    <div className ={`p-1 border rounded-md ${active || value  ? 'border-blue-600':'border-black'}`}>
        {!active &&<input autoFocus={active} onKeyUp={(e)=>handlekey(e.key)} className=' w-10 h-10 border-none outline-none p-4 bg-gray-100' value={value} onChange={(e)=>handleChange(e.target.value)}/>}
    {active &&<input autoFocus={active} onKeyUp={(e)=>handlekey(e.key)} className=' w-10 h-10 border-none outline-none p-4 bg-gray-100' value={value} onChange={(e)=>handleChange(e.target.value)}/>}
    </div>
  )
}

export default Square