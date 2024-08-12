
import { useSelector, useDispatch } from "react-redux";
  import { increment,reset, decrement } from "../feature/counter/action" ;


 export default function Counter(){
const counter = useSelector((state) => state.counter);

const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>
        Welcome To Redux Project.
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      </div>
      );
      }