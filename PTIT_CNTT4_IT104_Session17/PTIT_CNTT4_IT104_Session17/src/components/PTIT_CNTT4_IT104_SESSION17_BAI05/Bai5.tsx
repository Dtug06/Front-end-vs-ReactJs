import React,{useState} from 'react'

export default function Bai5() {
    const [value,setValue]=useState<string>("");
  const changeValue=(e:React.ChangeEvent<HTMLInputElement>)=>{
     setValue(e.target.value);
  }
  return (
    <div>
      <form action="">
        <input type="text" onChange={changeValue} />
        <p>{value}</p>
      </form>
    </div>
  )
}