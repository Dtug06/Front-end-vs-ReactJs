import React, { useReducer } from "react";
type Job = {
  id: number;
  title: string;
  completes: boolean;
};
export default function Bai8() {
  const initial = {
    jobs: [],
    new_title: "",
  };
  const todoReducer = (state: any, action: any) => {
    switch (action.type) {
      case "ADD":
        return { jobs: [...state.jobs, action.payload] };
      case "DELETE":
        let result = state.jobs.filter(
          (item: Job) => item.id != action.payload
        );
        return { jobs: result };
      default:
        state;
    }
  };
  const [todos, dispatch] = useReducer(todoReducer, initial);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    initial.new_title = e.target.value;
  };
  const addTodo = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 9999999),
      title: initial.new_title,
      completed: false,
    };
    dispatch({ type: "ADD", payload: newTodo });
  };
const deleteJob = (id: number) => {
  const confirmDelete = window.confirm("Bạn có chắc muốn xóa công việc này");
  if (confirmDelete) {
    dispatch({ type: "DELETE", payload: id });
  }
};

  return (
    <div>
      <input onChange={handleChange} type="text" name="" id="" />
      <button onClick={addTodo}>Thêm công việc</button>
      {todos.jobs.map((item: Job, index: number) => {
        return (
          <li key={index}>
            {item.title}{" "}
            <button onClick={() => deleteJob(item.id)}>Xóa </button>
          </li>
        );
      })}
    </div>
  );
}