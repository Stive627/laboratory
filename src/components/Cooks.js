import React, {useEffect, useState} from 'react'

function Cooks() {
    const [name, setName] = useState('')
    useEffect(()=>{
        fetch('http://localhost:3003/retrievecook', {credentials:'include'})
        .then(v => v.json())
        .then(value => {setName(value); console.log(value)})
        .catch(err=>console.log(`an error occured.\n ${err}`))
        },[])
  return (
      <h1>My name is{' '}{name.email} </h1>
  )
}

export default Cooks