import "./Todo.css"
const Todo = ({ title, id, completed }) => {
  return (
    <div>
        {/* <span>Todo Number: { id }</span> */}
        <span>{ title }</span>
        {/* <span> Completed: { completed }</span> */}

    </div>
  )
}

export default Todo