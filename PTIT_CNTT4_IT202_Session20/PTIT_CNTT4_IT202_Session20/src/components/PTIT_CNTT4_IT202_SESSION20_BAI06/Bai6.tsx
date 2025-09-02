import React, { useEffect, useState, useRef } from 'react'

export default function Bai6() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  useEffect(() => {
    if (isModalOpen) {
      inputRef.current?.focus()
    }
  }, [isModalOpen])

  return (
    <>
      <div style={isModalOpen ? { display: "none" } : { display: "block" }}>
        <h3>Ứng dụng</h3>
        <button onClick={toggleModal}>Mở modal</button>
      </div>
      <div style={isModalOpen ? { display: "block" } : { display: "none" }}>
        <h3>Đăng nhập</h3>
        <input type="text" placeholder="Nhập tên người dùng" ref={inputRef} /> <br />
        <button onClick={toggleModal}>Đóng</button>
      </div>
    </>
  )
}