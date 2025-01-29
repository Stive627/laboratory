import React, { useEffect, useState } from 'react'

function TimeCom() {
    const [change, setChange] = useState(false)
    const [regulator, setRegulator] = useState(false)
    const gethours = () => new Intl.DateTimeFormat('fr-FR',{'hour':'2-digit'}).format(new Date()).slice(0,2)
    const getminutes = () => new Intl.DateTimeFormat('fr-FR',{'minute':'2-digit'}).format(new Date())

    useEffect(()=>{
        function condition() {
            if(Number(gethours()) >= 3 && Number(getminutes()) % 2 === 0){
                setChange(true)
            }
            else{
                setChange(false)
            }}
       const timeId = setTimeout(() => {
                        condition()
                        setRegulator(!regulator)
                    }, 1000);
        return () => clearTimeout(timeId)
    },[change, regulator])
  return (
    <div className=' flex justify-center items-center h-screen w-screen'>
        <div className={` w-1/2 h-1/2 flex justify-center items-center  ${change? 'bg-blue-600':'bg-orange-500'}`}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="5" />
        </svg>
        </div>
    </div>
  )
}

export default TimeCom