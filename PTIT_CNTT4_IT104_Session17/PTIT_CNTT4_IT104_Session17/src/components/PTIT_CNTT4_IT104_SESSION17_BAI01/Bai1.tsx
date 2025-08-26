import React, { useState } from 'react'

export default function Bai1() {
    const [name,setName]=useState<string>("Nguyen Doanh Tuan");
  return (
    <div>
       <h2>Ho va ten : {name}</h2>
    </div>
  )
}