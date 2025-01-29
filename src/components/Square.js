import React from 'react'

function Square({value, handleValue, active, handleBack}) {
  return (
<>
{!active &&<input size={1} maxLength={1} onKeyUp={(e) => handleBack(e.key)} autoFocus={active} type='text' className = {`p-3 text-[25px] border ${ active ? 'border-blue-600' : 'border-gray-300'} outline-blue-600  w-10  h-16 rounded-lg `} value={value} onChange={(e)=>handleValue(e.target.value)}/>}
{active && <div className=' relative'><input size={1} maxLength={1} onKeyUp={(e) => handleBack(e.key)} autoFocus={active} type='text' className = {`p-3 text-[25px] border ${ active ? 'border-blue-600' : 'border-gray-300 absolute right-2'} outline-blue-600 w-10 h-16 rounded-md `} value={value} onChange={(e)=>handleValue(e.target.value)}/></div>}
</>)
}

export default Square