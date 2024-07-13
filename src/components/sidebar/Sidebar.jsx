import "./Sidebar.css";
const Sidebar = ({home, users, todos}) => {
  return (
    <div className="sidebar">
      <nav className="nav"> 
        <a href="/home">{home}</a>
        <a href="/users">{users}</a>
        <a href="/todos">{todos}</a>
      </nav>
    </div>
  );
};

export default Sidebar;
