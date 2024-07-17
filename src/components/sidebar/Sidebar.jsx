import "./Sidebar.css";
import { NavLink } from "react-router-dom";
const Sidebar = ({home, users, todos}) => {
  return (
    <div className="sidebar">
      <nav className="nav"> 
        <NavLink to="/" className={navData => navData.isActive ? "active" : "item"}>{home}</NavLink>
        <NavLink to="/users" className={navData => navData.isActive ? "active" : "item"}>{users}</NavLink>
        <NavLink to="/todos" className={navData => navData.isActive ? "active" : "item"}>{todos}</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
