import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function HeadCalendar({curMonth, currYear, handleNext, handlePrevious, handleSelect, arr}) {
    const bluecolor = 'rgba(22, 124, 255, 1)'
    const darkcolor = 'rgba(67, 67, 67, 1)'
    const [show, setShow] = useState(false)
  return (
    <div className=' w-full py-1 my-1 flex justify-between'>
        <div className=' flex flex-row text-[18px]'>
            <div><button  onClick={()=> handlePrevious()}><ArrowBackIosNewIcon style={{color:bluecolor}}/></button></div>
            <div className=' w-24'><p className=' text-center' style={{color:bluecolor, fontWeight:'bold'}}>{ curMonth}</p></div>
            <div><button   onClick={()=> handleNext()}><ArrowForwardIosIcon style={{color:bluecolor}}/></button></div>
        </div>
        <div >
            <button onClick={()=> setShow(!show)} style={{color:darkcolor}} className='text-[18px] cursor-pointer'>{currYear}</button>
<<<<<<< HEAD
            { show && <div className=' relative'> <div className=' absolute right-1 bg-white border'>
=======
            { show && <div className=' relative'><div className=' absolute right-1/4  left-0 w-32 bg-white border'>
>>>>>>> 2e2ec1302aa8c077b0234dba477b011b45836c83
                          <div className=' w-full flex flex-col divide-y divide-blue-400'>
                            {arr.map((elt, indx) => <button onClick = {() => {handleSelect(indx); setShow(!show);}} key={indx} className={`w-full text-[18px] p-1 ${parseInt(elt) === parseInt(currYear) && 'bg-blue-500 text-white'}`}>{elt}</button>)}
                          </div>
                          </div></div>}
        </div>
    </div>
  )
}

export default HeadCalendar