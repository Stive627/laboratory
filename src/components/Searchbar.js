import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Searchbar() {
  return (
    <div className=' w-screen h-screen bg-gray-300'>
        <div className=' w-full h-full flex items-center justify-center'>
            <div className=' w-1/3  p-4'>
                <div className=' w-full flex flex-row items-center'>
                <div className=' p-2 bg-white'><SearchIcon  className=' bg-white '/></div>
                <input  className=' w-full py-2 outline-none' placeholder='Enter your keywords'/>
                </div>
                <hr className=' w-full my-2 bg-white'/>
            </div>
        </div>
    </div>
  )
}

export default Searchbar