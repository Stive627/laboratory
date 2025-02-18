import React, {useState } from 'react'
import Elt from '../Elt'

function BirthFinal() {
    const number = ['01', '02', '03', '04' ,'05', '06', '07', '08', '09', '10']
    const [value, setValue] = useState('00')
  return (
    <div className=' relative  w-full '>
        <button  className=' border border-gray-100  outline-1  outline-blue-600 p-3 text-lg'>{value}</button>
        <div className=' absolute h-40 w-full overflow-y-scroll'  >
        <div className = ' flex flex-col  '>
            {number.map((elt, indx) => <Elt key={indx} value={elt} handleValue={()=>setValue(elt)} check={elt === value}/>)}
        </div>
        </div>
    </div> 
  )
}

export default BirthFinal