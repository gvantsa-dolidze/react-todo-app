import "./Todos.css";
import Todo from "./Todo";
import { useState } from "react";

const Todos = () => {
  const [text, setText] = useState("");

  const [todos, setTodos] = useState([
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
  ]);

  const addTodo = () => {
    const newTodo = {
      title: text,
      id: 4,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  return (
    <div className="todos">
      <label>
        <input
          value={text}
          placeholder="Write your todo here"
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button onClick={addTodo}>Add Todo</button>
      <div></div>
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
