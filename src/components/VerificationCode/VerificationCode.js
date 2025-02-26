import React, {useState } from 'react'
import { useScreen } from './useScreen'
import Square from './Square'

function VerificationCode({handleCode}){
    const large = useScreen()
    const [localcode, setLocalcode] = useState(['','','','','',''])
    const [i, setI] = useState(0)
    const [err, setErr] = useState(false)
    function handleChange(value, index){
        console.log([...localcode, value])
        if(localcode.slice(0,5).every(elt => elt)){ 
            console.log('well done ')
            if(+[...localcode, value].join('') === 111111){
                console.log('perfect Stive')
                setErr(false)
            }
            else{
                console.log('You did a mistake.')
                setErr(true)
            }
        }
        localcode[index] = value
        setLocalcode(localcode)
        setI(i + 1)
        handleCode(localcode.join(''))

    }
    function handleKey(ekey, value){
        console.log(i)
        if(ekey === 'Backspace' && !value){
            setI(i - 1)
        }
        if(!localcode.slice(0,5).every(elt => elt)){ 
            setErr(false)
        }
        if(localcode.every(elt => elt)){ 
            setErr(true)
        }
    }

  return (
    <div className=' w-full flex justify-center mt-8'>
        <div className={`${large? 'w-1/2' : 'w-full px-6'} flex flex-row gap-3 justify-center`}>
            {localcode.map((elt, indx) => <Square err={err} active={i === indx} value={elt} handleChange={(value) => handleChange(value, indx)} handlekey={(ekey) => handleKey(ekey, localcode[indx ])} key={indx}/>)}
        </div>
    </div>
  )
}

export default VerificationCode