import React from 'react'

export default function Bai5() {
  return (
    <div className="relative bg-sky-200 size-[200px] rounded-3xl my-10">
       <p className=" hover:bg-[#0369a1] p-2 text-white text-[20px] rounded-3xl mx-5 px-5 font-semibold">Relative parent</p>
        <div className="absolute bottom-0 left-0 bg-sky-500 rounded-3xl p-5 text-white font-semibold ">
       <p>Absolute child</p>
  </div>
</div>
  )
}
