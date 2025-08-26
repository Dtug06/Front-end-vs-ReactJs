import React ,{useState}from 'react'

export default function Bai4() {
    const[toggle,setToggle]=useState<boolean>(false);
    const changeToggle=()=>{
       toggle?setToggle(false):setToggle(true);
   }
   
  return (
    <div>
        <button onClick={changeToggle}>{toggle?"An":"Hien"}</button>
        <p>{toggle?"tieu de van ban":""}</p>
    </div>
  )
}