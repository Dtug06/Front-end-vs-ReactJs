import React, { useState, useEffect } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import axios from "axios";

type Post = {
  id: number;
  title: string;
  image: string;
  date: string;
  status: boolean;
};

export default function ListPost() {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const resetForm = () => {
    setTitle("");
    setImage("");
    setIsEdit(false);
    setCurrentId(null);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/posts").then(res => {
      setPosts(res.data);
    });
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm("Xác nhận xóa.")) {
      await axios.delete(`http://localhost:8080/posts/${id}`);
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  const handleAdd = async () => {
    const response = await axios.post("http://localhost:8080/posts", {
      title,
      image,
      date: new Date().toLocaleDateString(),
      status: true,
    });
    setPosts([...posts, response.data]);
    resetForm();
    setShow(false);
  };

  const handleEdit = (id: number) => {
    const post = posts.find(p => p.id === id);
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setIsEdit(true);
      setCurrentId(id);
      setShow(true);
    }
  };

  const handleUpdate = async () => {
    if (currentId !== null) {
      const old = posts.find(p => p.id === currentId);
      if (!old) return;

      const updated = { ...old, title, image };
      await axios.put(`http://localhost:8080/posts/${currentId}`, updated);
      setPosts(posts.map(p => (p.id === currentId ? updated : p)));
      resetForm();
      setShow(false);
    }
  };

  const handleBlock = (id: number) => {
    setPosts(posts.map(p => (p.id === id ? { ...p, status: !p.status } : p)));
  };

  const filteredPosts = posts.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Danh sách bài viết</h1>

      <input
        onChange={e => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
      />

      <Button variant="primary" onClick={() => setShow(true)}>
        Thêm bài viết mới
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={() => { setShow(false); resetForm(); }}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Cập nhật" : "Thêm mới"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hình ảnh</Form.Label>
              <Form.Control value={image} onChange={e => setImage(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setShow(false); resetForm(); }}>
            Hủy
          </Button>
          {isEdit ? (
            <Button variant="primary" onClick={handleUpdate}>Cập nhật</Button>
          ) : (
            <Button variant="primary" onClick={handleAdd}>Lưu</Button>
          )}
        </Modal.Footer>
      </Modal>

      {/* Bảng */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Ngày viết</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.image}</td>
              <td>{item.date}</td>
              <td>
                <Button size="sm" variant={item.status ? "success" : "secondary"}>
                  {item.status ? "Đã xuất bản" : "Chưa xuất bản"}
                </Button>
              </td>
              <td>
                <Button size="sm" variant="warning" onClick={() => handleBlock(item.id)}>
                  {item.status ? "Chặn" : "Bỏ chặn"}
                </Button>{" "}
                <Button size="sm" variant="outline-success" onClick={() => handleEdit(item.id)}>
                  Sửa
                </Button>{" "}
                <Button size="sm" variant="outline-danger" onClick={() => handleDelete(item.id)}>
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
