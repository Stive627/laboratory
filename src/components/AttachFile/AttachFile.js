import React, {useState } from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';

function AttachFile({handlefile}) {
    const [med, setMed] = useState(undefined)
  return (
    <div>
        <div className=' relative top-10 left-4'>
            <label className=' border border-none p-2 bg-black rounded-full flex justify-center items-center w-10 h-10' htmlFor='med'><AttachFileIcon className=' text-white'/>
                <input className=' hidden' id="med" type='file' onChange={(e) => {handlefile(URL.createObjectURL(e.target.files[0])); setMed(e.target.files[0]); console.log(e.target.files[0])}}/>
           </label>
           {med && <img alt='file' src={URL.createObjectURL(med)}/>}
        </div>

    </div>
  )
}

export default AttachFile