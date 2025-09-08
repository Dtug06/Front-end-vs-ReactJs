import React from 'react'
import { Button } from 'antd'

export default function Bai3() {
  return (
  <div className="flex gap-5">
     <div>
     <div className="w-[250px] rounded-lg border border-[#dadada] shadow-sm  p-3 my-5">
      <img 
        className="w-full h-[150px] object-cover rounded-md"
        src="https://www.ilounge.com/wp-content/uploads/2019/04/macbook-air.jpeg" 
        alt="Macbook Air"
      />
      <div className="text-center mt-3">
        <h2 className="font-semibold text-lg">MacBook Air 2018</h2>
        <p className="text-sm text-gray-600">
          The reason I am selling the machine is because it is too much power for what I need
        </p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Button type="primary">
            Xem chi tiet
        </Button>
        <span className="font-medium">30.000.000 đ</span>
      </div>
    </div>
    
   </div>
    <div>
     <div className="w-[250px] rounded-lg border border-[#dadada] shadow-sm  p-3 my-5">
      <img 
        className="w-full h-[150px] object-cover rounded-md"
        src="https://www.ilounge.com/wp-content/uploads/2019/04/macbook-air.jpeg" 
        alt="Macbook Air"
      />
      <div className="text-center mt-3">
        <h2 className="font-semibold text-lg">MacBook Pro 2019</h2>
        <p className="text-sm text-gray-600">
          The reason i am selling the machine is because it is too much power for what i need
        </p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Button type="primary">
            Xem chi tiet
        </Button>
        <span className="font-medium">30.000.000 đ</span>
      </div>
    </div>
    
   </div>
  </div>
     
  )
}
