import React,{useState} from 'react'

export default function Bai7() {
    const [city,setCity]=useState<string>("");
    const changeCity=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setCity(e.target.value)
    }
  return (
    <div>
        <p>Thanh pho:{city}</p>
        <select name="" id="" onChange={changeCity}>
            <option value="">-chon thanh pho-</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Thanh Hóa">Thanh Hóa</option>
            <option value="Hà Nam">Hà Nam</option>
            <option value="Ninh Bình">Ninh Bình</option>
            <option value="Nghê An">Nghệ An</option>
        </select>
    </div>
  )
}