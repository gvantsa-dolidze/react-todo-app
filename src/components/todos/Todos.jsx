import "./Todos.css";
import Todo from "./Todo";

const Todos = () => {

  
    

  const addTodo = () => {
    if (text.trim() !== "") {
      const newTodo = {
        title: text,
        id: todos.length + 1,
        completed: false,
      };
      setTodos([...todos, newTodo]);
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
