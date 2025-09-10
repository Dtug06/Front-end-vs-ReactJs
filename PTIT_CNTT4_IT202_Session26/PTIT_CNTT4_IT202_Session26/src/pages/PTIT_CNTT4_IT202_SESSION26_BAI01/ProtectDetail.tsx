import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div >
      <h1 >Chi tiết sản phẩm</h1>
      <p >
        ID sản phẩm là: <span >{id}</span>
      </p>
    </div>
  );
}
