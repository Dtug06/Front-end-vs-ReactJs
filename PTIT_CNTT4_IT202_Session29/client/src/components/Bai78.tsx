
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Bai7() {
  const [studentList, setStudentList] = useState<any[]>([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/student");
    setStudentList(res.data);
  };

  const deleteStudent = async (id: number) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa sinh viên này?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:8080/student/${id}`);
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Quản lý sinh viên</h1>
      {studentList.length === 0 ? (
        <p style={{ textAlign: "center" }}>Chưa có sinh viên nào</p>
      ) : (
        <table style={{ width: "1000px", margin: "auto", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Tên sinh viên</th>
              <th>Email</th>
              <th>Địa chỉ</th>
              <th>Số điện thoại</th>
              <th>Lựa chọn</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {studentList.map((student: any) => (
              <tr key={student.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{student.studentName}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{student.phone}</td>
                <td>
                  <button
                    style={{
                      backgroundColor: "orange",
                      border: "none",
                      color: "white",
                      marginRight: "10px",
                      borderRadius: "4px",
                      padding: "5px 10px",
                    }}
                  >
                    Sửa
                  </button>
                  <button
                    style={{
                      backgroundColor: "red",
                      border: "none",
                      color: "white",
                      borderRadius: "4px",
                      padding: "5px 10px",
                    }}
                    onClick={() => deleteStudent(student.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
