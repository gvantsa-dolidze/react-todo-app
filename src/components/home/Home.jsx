import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import { decrement, increment } from "../../store/counterSlice";
const Home = () => {
  const [number, setNumber] = useState(0);

  const counter = useSelector(state => state.counterPage.counter);
  const dispatch = useDispatch();


  return (
    <div className="home">
      <div>
        <button onClick={() => setNumber((number) => number - 1)}>-</button>
        <span>{number}</span>
        <button onClick={() => setNumber((number) => number + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{counter}</span>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  );
};

export default Home;
