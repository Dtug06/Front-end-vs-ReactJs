
import axios from "axios";
import React, { useEffect, useState } from "react";
export default function Bai6() {
  const [studentList, setStudentList] = useState<any[]>([]);
  const [newStudent, setNewStudent] = useState({
    studentName: "",
    email: "",
    address: "",
    phone: "",
    status: "",
    createdAt: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "status") {
      setNewStudent({
        ...newStudent,
        status: value === "true" ? true : false,
      });
    } else {
      setNewStudent({
        ...newStudent,
        [name]: value,
      });
    }
  };

  const addStudent = async (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn reload
    await axios.post("http://localhost:8080/student", newStudent);
    getData(); // Lấy lại danh sách sau khi thêm
  };

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/student");
    setStudentList(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Thêm sinh viên</h2>
      <form onSubmit={addStudent}>
        <input
          type="text"
          name="studentName"
          value={newStudent.studentName}
          placeholder="Nhập tên"
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="email"
          value={newStudent.email}
          placeholder="Nhập email"
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="address"
          value={newStudent.address}
          placeholder="Nhập địa chỉ"
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="phone"
          value={newStudent.phone}
          placeholder="Nhập số điện thoại"
          onChange={handleChange}
        />
        <br />

        <input
          type="text"
          name="createdAt"
          value={newStudent.createdAt}
          placeholder="Nhập thời gian tạo"
          onChange={handleChange}
        />
        <br />

        <select name="status" value={String(newStudent.status)} onChange={handleChange}>
          <option value="" hidden>
            Chọn trạng thái
          </option>
          <option value="true">Hoạt động</option>
          <option value="false">Ngừng hoạt động</option>
        </select>
        <br />

        <button type="submit">Thêm</button>
      </form>

      <h3>Danh sách sinh viên</h3>
      <ul>
        {studentList.map((stu) => (
          <li key={stu.id}>
            {stu.studentName} - {stu.email} - {stu.address} -{" "}
            {stu.status ? "Hoạt động" : "Ngừng hoạt động"}
          </li>
        ))}
      </ul>
    </div>
  );
}
