import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <div className="tab-content">
      <div className="tab-pane fade show active">
        <ul className="list-group mb-0">
          <TodoItem text="Cras justo odio" done />
          <TodoItem text="Cras justo odio" />
        </ul>
      </div>
    </div>
  );
}
