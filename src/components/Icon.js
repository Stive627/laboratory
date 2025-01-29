import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';


function Icon({badge}) {
  return (
    <button className=' relative left-6  top-6'>
        <NotificationsIcon className=' text-lg text-gray-700' style={{fontSize:'40px'}} />
        <div className=' border rounded-full bg-orange-300 text-white p-2 font-bold w-4 h-4  absolute flex justify-center items-center bottom-5  left-5'><p className=' text-sm'>{2}</p></div>
    </button>
  )
}

export default Icon