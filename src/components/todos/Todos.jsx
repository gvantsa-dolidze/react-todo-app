import "./Todos.css";
import Todo from "./Todo";
const Todos = () => {
  const todos = [
    {
      title: "Do Homework",
      id: 1,
      completed: false,
    },
    {
      title: "Do Housework",
      id: 2,
      completed: true,
    },
    {
      title: "Go Shopping",
      id: 3,
      completed: false,
    },
  ];

  return (
    <div className="todos">
      <label>
        <input placeholder="Write your todo here" />
      </label>
      <button>Add Todo</button>
      <div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            id={todo.id}
            completed={todo.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
