import { useDispatch, useSelector} from "react-redux";
import {Incrementcounter , Decrementcounter} from './actions/index'

const App=() => {  
    const counter = useSelector((state)=>state.ReactReducer)
    const dispatch = useDispatch();
  return (
    <div>
      <h1>Welcome ro REdux</h1>
      <button onClick={() => dispatch(Incrementcounter(5))} >+</button>
      <button onClick={() => dispatch(Decrementcounter())} >-</button>
      <h1> counter: {counter}</h1>
    </div>
  );
}

export default App;
