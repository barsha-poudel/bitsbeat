import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment } from './redux/counter';
import Child from './Child'

function App() {
  const {count,value} = useSelector((state)=>state.counter);
  console.log(value);
  console.log(count);

  const dispatch = useDispatch();
  return (
    <div>
      <h1> Count: {count}</h1>
      <button onClick={()=>dispatch(increment(5))}>increment</button>
      <button onClick={()=>dispatch(decrement(5))}>Decrement</button>
    <Child a='ssasas' b='sdsadasdas' c='ssdasda'/>
    </div>
  );
}

export default App;