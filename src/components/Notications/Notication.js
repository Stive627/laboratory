import React from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import './notication.css'

//We have to add the overflow hidden while using this functionnality 
function Notication() {
  return (
    <div className=' w-screen overflow-x-hidden'>
                <div className=' absolute -right-4'>
                    <div className=' w-64 bg-white border border-blue-500 p-2 '>
                        <p className = 'text-[18px]'><DoneAllIcon/>{' '} Password sent</p>
                    </div>
                </div>
    </div>
    )
}
export default Notication