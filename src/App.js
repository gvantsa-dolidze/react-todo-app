import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import Todos from "./components/todos/Todos";
import Users from "./components/users/Users";
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar 
             home="Home"  
             users="Users" 
             todos="Todos" 
             />
      <div className="wrapper">
          <Home />
          <Todos />
          <Users />
      </div>
    </div>
  );
}

export default App;
