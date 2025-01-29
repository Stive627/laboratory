import React, { useState } from 'react'

function Square({value, handleValue, active, handleBack}) {
    return (
  <>
  {!active &&<input size={1} maxLength={1} onKeyUp={(e) => handleBack(e.key)} autoFocus={active} type='text' className = {`p-3 text-[25px] border ${ active ? 'border-blue-600' : 'border-gray-300'} outline-blue-600  w-10  h-16 rounded-lg `} value={value} onChange={(e)=>handleValue(e.target.value)}/>}
  {active && <div className=' relative'><input size={1} maxLength={1} onKeyUp={(e) => handleBack(e.key)} autoFocus={active} type='text' className = {`p-3 text-[25px] border ${ active ? 'border-blue-600' : 'border-gray-300 absolute right-2'} outline-blue-600 w-10 h-16 rounded-md `} value={value} onChange={(e)=>handleValue(e.target.value)}/></div>}
  </>)
  }


function Code() {
    const [code, setCode] = useState({one:undefined, two:undefined, three:undefined, four:undefined, five:undefined, six:undefined})
    const [curr, setCurr] = useState(1)
    function handleBack(value){
        if(value === 'Backspace'){
            setCurr(curr - 1)
            return;
        }
        return;
    }
  return (
    <div className=' h-screen w-screen  flex justify-center items-center'>
        <div className='  w-1/3 flex justify-center'>
        <div className='  flex flex-row gap-2'>
            <Square value={code.one} active={1 === curr} handleValue={(value)=>{setCode({...code, one:value}); setCurr(curr+1)}} handleBack={handleBack}/>
            <Square value={code.two} active={2 === curr} handleValue={(value)=>{setCode({...code, two:value}); setCurr(curr+1)}} handleBack={handleBack}/>
            <Square value={code.three} active={3 === curr} handleValue={(value)=>{setCode({...code, three:value}); setCurr(curr+1)}} handleBack={handleBack}/>
            <Square value={code.four} active={4 === curr} handleValue={(value)=>{setCode({...code, four:value}); setCurr(curr+1)}} handleBack={handleBack}/>
            <Square value={code.five} active={5 === curr} handleValue={(value)=>{setCode({...code, five:value}); setCurr(curr+1)}} handleBack={handleBack}/>
            <Square value={code.six} active={6 === curr} handleValue={(value)=>{setCode({...code, six:value})}}/>
        </div>
        </div>
    </div>
  )
}

export default Code