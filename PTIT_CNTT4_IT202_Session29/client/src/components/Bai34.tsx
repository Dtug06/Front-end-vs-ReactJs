import React from 'react'
import axios from "axios";
export default function Bai34() {
    async function getAllStudents(){
        const res=await axios.get("http://localhost:8080/student");
        console.log("Thong tin cac  sinh vien :Đ");
        console.log(res.data);
    }
    getAllStudents();
  return (
    <div>
      
    </div>
  )
}