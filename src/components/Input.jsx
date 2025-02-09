import React, { useContext } from 'react'
import InputContext from '../context/inputContext'

export default function Input() {
    const{label,type,placeHolder,handleKey}=useContext(InputContext);
  return (
    <div>
        <label htmlFor="input">{label}</label>
        <input className='p-3' id='input' type={type}  placeholder={placeHolder}  onKeyUp={(event)=>{handleKey(event)}} />
    </div>
  )
}
