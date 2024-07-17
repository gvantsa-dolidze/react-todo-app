import { useState } from "react";
import "./Home.css";
const Home = () => {
  const [number, setNumber] = useState(0);
  // const decrement = () => {
  //   setNumber(number => number -  1)
  // }

  // const increment = () => {
  //   setNumber(number => number + 1)
  // }

  return (
    <div className="home">
      <button onClick={() => setNumber((number) => number - 1)}>-</button>
      <span>{number}</span>
      <button onClick={() => setNumber((number) => number + 1)}>+</button>
    </div>
  );
};

export default Home;
