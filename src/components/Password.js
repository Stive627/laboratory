import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Password({value, handlePassword, placeholder}) {
    const [type, setType] = useState('password')
  return (
    <div className=' flex justify-center w-full'>
        <div className=' w-full'> <input value={value} placeholder='' style={{outlineColor:'rgba(61, 93, 242, 1)'}} className=' w-full border border-gray-400 px-2 py-1' type={type}  onChange={(e)=>handlePassword(e.target.value)}/></div>
        <div className=' relative'> <button onClick ={()=>setType(type === 'password' ? 'text' : 'password')} className=' absolute right-1 top-1 cursor-pointer'>{type === 'password' ? <VisibilityIcon/> : <VisibilityOffIcon/>}</button></div>        
    </div>
  )
}

export default Password