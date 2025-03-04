import React, {useState } from 'react'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function SelectUI() {
    const elts = ['One', 'Two', 'Three', 'Four', 'Five']
    const [show, setShow] = useState(false)
    const [value, setValue] = useState('--select the service--')

  return (
    <>
        {show && <div onClick={()=> setShow(false)} className='  absolute w-screen h-screen'></div>}
        <div className=' w-screen flex justify-center'>
            <div className=' w-3/4'>
                <div className=' relative cursor-pointer '>
                    <div className={` ${show ? ' border-2 border-blue-500' : 'border-gray-200 border'} py-1 px-1 flex flex-row justify-between`} onClick={() => setShow(true)}><p>{value}</p><div><button>{show ? <ExpandLessIcon/> : <ExpandMoreIcon/>} </button></div></div>
                    {show && <div className=' absolute top-10  w-full'>
                                <div className=' flex flex-col gap-2 p-1 divide-y-2  bg-white border border-gray-100 divide-gray-100'>
                                    {elts.map((elt, indx) => <p className=' w-full pt-1' onClick={() => {setShow(false); setValue(elt)}} key={indx}>{elt}</p>)}
                                </div>
                            </div>}       
                </div>
            </div>
        </div>
    </>
  )
}

export default SelectUI