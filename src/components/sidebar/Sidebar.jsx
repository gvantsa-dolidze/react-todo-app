import "./Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = ({home, users, todos}) => {
  return (
    <div className="sidebar">
      <nav className="nav"> 
        <Link to="/home">{home}</Link>
        <Link to="/users">{users}</Link>
        <Link to="/todos">{todos}</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
