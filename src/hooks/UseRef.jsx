import React, { useRef } from 'react'

export default function UseRef() {
    const lableRef=useRef(null);
    const countRef=useRef(0)
    const handlekey=(e)=>{
        lableRef.current.classList.add("text-blue-500")
        
    }
    const handleMouse=(e)=>{
        countRef.current=countRef.current + 1
        console.log(countRef,"countRef");
        
        
        
        
    }
  return (
    <div>
        <label htmlFor="input-name" ref={lableRef}>Your Name:</label>
        <input type="text" placeholder='enter your name'  id='input-name' onKeyUp={(event)=>handlekey(event)}/>
        <div className='h-10 w-10 bg-slate-500' onMouseEnter={(event)=>handleMouse(event)}></div>
    </div>
  )
}
