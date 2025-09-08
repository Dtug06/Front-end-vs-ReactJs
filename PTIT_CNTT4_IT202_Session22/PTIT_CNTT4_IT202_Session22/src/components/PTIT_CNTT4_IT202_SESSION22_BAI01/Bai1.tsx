import React from 'react'
import { Button } from 'antd'
export default function Bai1() {
  return (
    <div className="flex gap-1.5">
      <Button style={{color:"white",background:'blue',borderRadius:'5px'}} >Save</Button>
      <Button style={{color:"white",background:'green',borderRadius:'5px'}}>Cancel</Button>
      <Button style={{color:"white",background:'green',borderRadius:'5px'}}>Success</Button>
      <Button style={{color:"black",background:'orange',borderRadius:'5px'}}>Warning</Button>
      <Button style={{color:"white",background:'green',borderRadius:'5px'}}>Bao loi</Button>
      <Button style={{color:"black",background:'blue',borderRadius:'5px'}}>Info</Button>
      <a  className="underline  text-sky-500 " href="https://portal.rikkei.edu.vn/learn/54/homework/3592">Link</a>
    </div>
  )
}
