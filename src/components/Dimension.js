import React, {useState, useEffect} from 'react'

function useDimension(){
    const [height, setHeight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        function handleDimension(){
            setHeight(window.innerHeight)
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleDimension)
        return ()=> window.removeEventListener('resize', handleDimension)

    },[])
    return {height, width}
}


function Value({value, number}) {
  return (
    <div className=' flex justify-between'>
        <p className='text-[25px]'>{value}</p>
        <p className=' text-[25px] text-blue-600'>{number}</p>
    </div>
  )
}


function Dimension() {
    const {height, width} = useDimension()
  return (
    <div className=' flex justify-center items-center w-screen h-screen'>
        <div className=' border border-blue-500 p-5 w-1/3'>
        <Value value={'Height'} number={height}/>
        <hr className=' my-2 bg-blue-200'/>
        <Value value={'Width'} number={width}/>    
        </div>
    </div>
  )
}

export default Dimension