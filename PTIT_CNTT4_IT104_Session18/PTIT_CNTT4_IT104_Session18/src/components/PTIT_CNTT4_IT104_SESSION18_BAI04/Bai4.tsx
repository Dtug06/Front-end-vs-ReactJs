import React, { useCallback, useState } from 'react'
export default function Bai4() {
    const [color,setColor] = useState("");
    const handleColor = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
            setColor(e.target.value)
        },[color])
  return (
    <div>
      <label htmlFor="">mau nguoi dung chon mau:</label><br />
      <input type="color" name="color" id="" onChange={handleColor}/>
      <p>Mau hien thi:</p>
      <div style={{width:"200px",height:"200px",backgroundColor:`${color}`}}></div>
    </div>
  )
}