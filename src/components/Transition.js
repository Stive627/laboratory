import React, {useState} from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../App.css'
function Transition() {
    const [show, setShow] = useState(false)
  return (
    <>
    <button onClick = {()=>setShow(true)}>show</button>
    <div onAnimationEnd={()=>setShow(false)} className={`absolute -right-44 ${show  && ' transition'}`}>
        <div className=' p-4 border border-black '>
            <p>New code sent <CheckCircleOutlineIcon className=' text-white bg-black rounded-full'/></p>
        </div>
    </div>
    </>
  )
}

export default Transition