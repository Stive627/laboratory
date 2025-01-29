import React, { useState } from 'react'

function FocusVerification() {
    const [day, setDay] = useState('')
    const [focus, setFocus] = useState(false)
    const handleFocus = () => setFocus(true)
    const handleOnBlur= () => {setFocus(false); setDay(String(day).length === 1 ? '0'+ String(day) : day)}
    const handleChange = (e) => setDay(e.target.value > 2 ? e.target.value.slice(0, 2) : e.target.value)
    const className = ` w-32 p-2 border text-[21px] ${focus? ' outline-blue-600' : 'border-gray-500'}`
  return (
    <div className=' h-screen w-screen flex justify-center items-center '>
        <div>
            <p className={` text-[21px] ${focus?'text-blue-600' : 'text-gray-900'}`}>Day</p>
            <input onKeyUp={(e) => /[0-9]/.test(e.key)} onFocus={handleFocus} onBlur={handleOnBlur} maxLength={2} type = 'number' className = {className}  value={day} onChange={handleChange} placeholder = '00'/>
        </div>
    </div>
  )
 }

export default FocusVerification