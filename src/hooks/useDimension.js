import { useEffect, useState } from "react";

export function useDimension(){
    const [height, setHeight] = useState(window.innerHeight)
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        function handleDimension(){
            setHeight(window.innerHeight)
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleDimension)
    },[])
    return {height, width}
}