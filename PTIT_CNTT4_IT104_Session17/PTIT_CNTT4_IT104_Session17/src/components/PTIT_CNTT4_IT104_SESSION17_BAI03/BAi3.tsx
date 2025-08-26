import React,{useState} from 'react'

export default function Bai3() {
    const[color,setColor]  =useState<string>('black');
  const  changeColor=()=>{
        setColor('red');
    }
    return (
    <div>
        <p style={{color:color}}>tieu de van ban</p>
        <button onClick={changeColor}>Thay doi mau</button>
    </div>
  )
}