import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Month from './Month'
import data from './data'

function Calendar() {
    const [mo, setMo] = useState(1)
    const nextMonth = () => setMo(mo < 3 ? mo + 1 : mo)
    const previousMonth = () => setMo(mo > 1 ? mo - 1 : mo)
    const indx = `0${mo}`
    console.log(indx)
  return (
    <div className = ' w-screen h-screen'>
        <div className='  h-full flex justify-center items-center'>
            <div className='w-1/2 '>
            <h1 className=' font-bold text-[21px] text-center'>TNexon calendar</h1>
            <div className=' flex justify-between w-full'>
                <button onClick={() => previousMonth()} className=' p-3 border rounded-full bg-black'><ArrowBackIosNewIcon className=' text-white'/></button>
                <button onClick={() => nextMonth()} className=' p-3 border rounded-full bg-black'><ArrowForwardIosIcon className=' text-white'/></button>
            </div>
            <Month month={data[indx].month} r1={data[indx].r1} r2={data[indx].r2} r3={data[indx].r3} r4={data[indx].r4} r5={data[indx].r5} r6={data[indx].r6}/>
            </div>
        </div>
    </div>
  )
}

export default Calendar