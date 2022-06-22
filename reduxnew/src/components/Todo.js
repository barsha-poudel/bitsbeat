import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
// import {ADD_TODO, DELETE_TODO} from "../actions/index";
import {add_todo,delete_todo} from '../actions/index'

function Todo() {
  const [inputdata, setInputdata] = useState('')
  const Todos = useSelector((state)=>{
    return state.TodoReducers
  })
    // const inputData=3
    const dispatch = useDispatch()
  return (
    <div>
      <h1>Hello I am TOdo from REact-REdux</h1>
      <div> 
        <input type="text" placeholder="Add items" value={inputdata}
        onChange= {(event)=>setInputdata(event.target.value)}
        ></input>
        <button onClick={()=>dispatch(add_todo(inputdata), setInputdata(' '))}>ADD TODO</button>
      </div>
      <div>
     
        {Todos.map((todo,index)=>(
                // <li id={todo.id} name={todo.name}></li>
                <div key = {index}>
                    <p>{todo.id}</p>
                    <p>{todo.data}</p>
                    <button onClick={()=>dispatch(delete_todo(todo.id))}>DELETE TODOS</button>
                </div>
                
            ))}
      
        </div>
    </div>
  );
}

export default Todo;
