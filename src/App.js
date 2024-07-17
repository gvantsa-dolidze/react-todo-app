import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import Todos from "./components/todos/Todos";
import Users from "./components/users/Users";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar home="Home" users="Users" todos="Todos" />
      <div className="wrapper">
        <Routes>
          <Route path='/'  element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/todos' element={<Todos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
