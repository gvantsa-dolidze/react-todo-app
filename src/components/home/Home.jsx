import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/counterSlice";

const Home = () => {
  const counter = useSelector((state) => state.counterPage.counter);
  const dispatch = useDispatch();
  return (
    <div className="home">
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(increment())} >+</button>
    </div>
  );
};

export default Home;
