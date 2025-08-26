import React ,{useState}from 'react'

export default function Bai6() {
    const[value,setvalue]=useState<string>("");
    const changeValue=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setvalue(e.target.value);
    }
  return (
    <div>
   <form action="">
    <input type="text" onChange={changeValue}/>
    <p>{value.length}</p>
   </form>

    </div>
  )
}