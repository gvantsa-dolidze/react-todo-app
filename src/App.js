import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Todos from './components/todos/Todos';
import Users from './components/users/Users';
function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Home />
      <Todos />
      <Users />
    </div>
  );
}

export default App;