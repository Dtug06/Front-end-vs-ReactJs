import React from 'react'
import { Input } from "antd";
export default function Bai2() {
  return (
    <div className=" gap-5">
      <Input size="large" placeholder='Large input'></Input>
      <Input placeholder='Default size'></Input>
      <Input size="small" placeholder='Small input'></Input>
    </div>
  )
}
