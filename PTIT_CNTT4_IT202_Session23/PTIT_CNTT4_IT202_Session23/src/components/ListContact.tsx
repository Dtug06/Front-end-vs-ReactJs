import { Button, Pagination } from "antd";
import { Trash, PencilLine, List } from "lucide-react";
import React from "react";

export default function ListContact() {
  return (
    <div className="rounded-lg shadow-md bg-white mt-5">
      <div className="text-[#2e8b57] text-[22px] font-semibold px-5 pt-5 pb-3 border-b border-gray-200">
        <h1 className="flex items-center gap-2">
          <List /> Danh sách liên hệ
        </h1>
      </div>

      <table className="w-full border-collapse">
        <thead>
              <tr className="bg-gray-100">
            <th className="p-3 text-left font-medium border-b border-gray-200">
              Tên liên hệ
            </th>
            <th className="p-3 text-left font-medium border-b border-gray-200">
              Số điện thoại
            </th>
            <th className="p-3 text-left font-medium border-b border-gray-200">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: "Nguyễn Văn A", phone: "0912345678" },
            { name: "Trần Thị B", phone: "0987654321" },
            { name: "Lê Văn C", phone: "0901234567" },
          ].map((item, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="p-3 border-b border-gray-200">{item.name}</td>
              <td className="p-3 border-b border-gray-200">{item.phone}</td>
              <td className="p-3 border-b border-gray-200">
                <div className="flex gap-2">
                  <Button type="primary" icon={<PencilLine size={16} />}>
                    Sửa
                  </Button>
                  <Button
                    color="danger"
                    variant="solid"
                    icon={<Trash size={16} />}
                  >
                    Xóa
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center py-4">
        <Pagination simple defaultCurrent={1} total={30} />
      </div>
    </div>
  );
}
