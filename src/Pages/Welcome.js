import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate()

  return (
    <div className = ' flex justify-center items-center w-full gap-5'>
        <h2 className=' text-center'>Welcome Stive</h2>
        <button onClick={()=>navigate('/profile')} className=' px-3 py-2 text-white bg-blue-600 text-center w-72 border border-black'>Move to profile</button>
    </div>
  )
}

export default Welcome