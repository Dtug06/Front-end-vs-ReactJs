import React from "react";
import { User, NotebookTabs } from "lucide-react";
import Input from "antd/es/input/Input";

export default function AddContact() {
  return (
    <div className="shadow-2xl rounded-[10px] pb-[20px]">
      <div className=" bg-[#2e8b57] font-medium text-white text-[32px] flex justify-center items-center py-3 rounded-t-[5px]">
        <h1 className="flex items-center gap">
          {" "}
          <NotebookTabs />
          Quản Lý Liên Hệ
        </h1>
      </div>
      <h2 className=" text-[#2e8b57] font-medium text-sm text-[28px] mx-[10px] pt-[20px] flex justify-start items-center">
        {" "}
        <User />
        Thêm Liên Hệ Mới
      </h2>
      <div className="flex gap-[8px] py-[10px] px-[25px]">
        <Input size="middle" placeholder="Tên liên hệ"></Input>
        <Input size="middle" placeholder="Số điện thoại"></Input>
        <button className="bg-[#2e8b57] text-white py-1 px-3 rounded-[5px] hover:bg-[#36b1a2]">
          Thêm
        </button>
      </div>
    </div>
  );
}
