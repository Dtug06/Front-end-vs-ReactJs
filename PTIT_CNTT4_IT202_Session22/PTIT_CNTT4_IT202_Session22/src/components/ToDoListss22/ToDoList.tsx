import { Button, Input } from "antd";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { v7 as uuid } from "uuid";

interface Task {
  id: number | string;
  name: string;
  isCompleted: boolean;
}

export default function TodoList() {
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>(() => {
    // Lấy dữ liệu từ local về
    const taskLocals = localStorage.getItem("tasks");

    // Chuyển đổi từ kiểu JSON sang kiểu của JS
    return taskLocals ? JSON.parse(taskLocals) : [];
  });

  // Lấy giá trị trong input
  const handleChangeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Lấy ra giá trị trong input
    if (!event.target.value) {
      setError("Tên công việc không được để trống");
      return;
    } else {
      setError("");
      setTask(event.target.value);
    }
  };

  // Sự kiện submit form
  const handleSubmit = (event: React.FormEvent) => {
    // Ngăn chặn sự kiện load lại trang
    event.preventDefault();

    // Tạo đối tượng task
    const newTask: Task = {
      id: uuid(),
      name: task,
      isCompleted: false,
    };

    // Clone tasks ra 1 mảng mới và thêm dữ liệu
    const taskClones = [...tasks, newTask];

    // Lưu thông tin vào trong state tasks
    setTasks(taskClones);

    // Lưu dữ liệu lên localStorage
    localStorage.setItem("tasks", JSON.stringify(taskClones));

    // Xóa giá trị của input
    setTask("");
  };

  // Hàm cập nhật công việc
  const handleChangeStatus = (id: number | string) => {
    const updateTasks = tasks.map((task: Task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });

    // Lưu thông tin vào trong state tasks
    setTasks(updateTasks);

    // Lưu dữ liệu lên localStorage
    localStorage.setItem("tasks", JSON.stringify(updateTasks));
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="w-[1000px] border border-[#dadada] p-6 rounded-lg shadow-sm">
          <h3 className="text-center text-[24px] font-semibold mb-6">
            Danh sách công việc
          </h3>
          <form onSubmit={handleSubmit} className="flex gap-5 mb-3">
            <Input
              value={task}
              onChange={handleChangeTask}
              placeholder="Nhập tên công việc"
            />
            <Button htmlType="submit" type="primary">
              Thêm
            </Button>
          </form>

          {error && (
            <p className="mb-6 text-red-600 text-[14px]">
              Tên công việc không được để trống
            </p>
          )}

          <ul className="mb-6">
            {tasks.map((task: Task) => (
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <input
                    onChange={() => handleChangeStatus(task.id)}
                    type="checkbox"
                    checked={task.isCompleted}
                  />
                  {task.isCompleted ? (
                    <s>{task.name}</s>
                  ) : (
                    <span>{task.name}</span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Pencil
                    size={18}
                    className="text-orange-400 hover:text-orange-600 cursor-pointer"
                  />
                  <Trash2
                    size={18}
                    className="text-red-400 hover:text-red-600 cursor-pointer"
                  />
                </div>
              </li>
            ))}
          </ul>
          <div>
            <span>Công việc đã hoàn thành: </span> <span>0</span> /{" "}
            <span>4</span>
          </div>
        </div>
      </div>
    </>
  );
}