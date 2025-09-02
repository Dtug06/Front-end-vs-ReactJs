import React, { useEffect, useState } from 'react';

export default function DynamicTitle() {
  const [title, setTitle] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <h4>Chào mừng đến với trang của chúng tôi</h4>
      <input type="text" onChange={handleInputChange} />
      <p>Tiêu đề trang sẽ thay đổi khi bạn nhập ở trên</p>
    </div>
  );
}