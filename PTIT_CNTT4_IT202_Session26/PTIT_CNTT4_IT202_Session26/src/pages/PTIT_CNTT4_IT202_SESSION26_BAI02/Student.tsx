import React from "react";
import { useParams } from "react-router-dom";

export default function Student() {
  const { name } = useParams();

  return (
    <div >
      <h1 >Thông tin sinh viên</h1>
      <p >
        Tên sinh viên là: <span >{name}</span>
      </p>
    </div>
  );
}
