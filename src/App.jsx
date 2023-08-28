import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  increment2,
  increment3,
  increment4,
} from "./slices/counterSlice";

function App() {
  const data = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <>
      <div className="result">
        <h1 className="calculation">(+){data.counter.value}</h1>
        <h1 className="calculation">(-){data.counter.value2}</h1>
        <h1 className="calculation">(*){data.counter.value3}</h1>
        <h1 className="calculation">(/){data.counter.value4}</h1>
      </div>

      <button className="calculation" onClick={() => dispatch(increment(2))}>
        +
      </button>
      <button className="calculation" onClick={() => dispatch(increment2(2))}>
        -
      </button>
      <button className="calculation" onClick={() => dispatch(increment3(2))}>
        *
      </button>
      <button className="calculation" onClick={() => dispatch(increment4(2))}>
        /
      </button>
    </>
  );
}

export default App;
