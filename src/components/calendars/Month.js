import React from 'react'

function Month({month, cm}) {
    const title = ['S','M','T','W','T','F','S']
    const darkcolor = 'rgba(67, 67, 67, 1)'
    const date = new Date()
    const day = date.getDate()
    const currentday = (value) => Number(value) === day
    const Square = ({d}) => <div className=' w-14 h-14 flex justify-center items-center'><div><button style={(currentday(d) && cm )?{color:'white', backgroundColor:'rgba(22, 124, 255, 1)'}:{backgroundColor:'white'}} className={`${currentday(d) && cm &&  ' text-white'} ${currentday(d) && !cm &&' border'} rounded-full p-2 w-6 h-6 flex items-center justify-center`}><p>{d}</p></button></div></div>
  return (
    <>   
      <div className = 'flex justify-between'>{title.map((elt, indx) => <p className=' text-center text-[19px]' style={{color:darkcolor}} key={indx}>{elt}</p>)}</div> 
      <div className = 'grid grid-cols-7 divide-y divide-x   divide-gray-200'>
          {month.map((elt, indx) => <Square key={indx} d={elt}/>)}
      </div>
    </>
  )
}

export default Month