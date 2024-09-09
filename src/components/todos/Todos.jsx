import "./Todos.css";
import Todo from "./Todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/todosSlice";

const Todos = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todosPage.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
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
      <button onClick={handleAddTodo}>Add Todo</button>
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
