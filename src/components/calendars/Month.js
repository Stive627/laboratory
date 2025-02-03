import React from 'react'

function Month({month, cm}) {
    const title = ['S','M','T','W','T','F','S']
    const darkcolor = 'rgba(67, 67, 67, 1)'
    const date = new Date()
    const day = date.getDate()
    const currentday = (value) => Number(value) === day
    const Square = ({d}) => <div className='  flex justify-center items-center'><div><button style={(currentday(d) && cm )?{color:'white', backgroundColor:'rgba(22, 124, 255, 1)'}:{backgroundColor:'white'}} className={`${currentday(d) && cm &&  ' text-white'} ${currentday(d) && !cm &&' border'} rounded-full  w-8 h-8  m-2  flex items-center justify-center`}><p>{d}</p></button></div></div>
  return (
    <>   
      <div className = 'flex justify-between'>{title.map((elt, indx) => <p className=' text-center text-[15px]' style={{color:darkcolor}} key={indx}>{elt}</p>)}</div> 
      <div className = ' border border-gray-200 grid grid-cols-7 divide-y divide-x   divide-gray-200'>
          {month.map((elt, indx) => <Square key={indx} d={elt}/>)}
      </div>
    </>
  )
}

export default Month