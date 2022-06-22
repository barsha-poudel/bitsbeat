import {useState} from 'react';
import { useDispatch, useSelector} from "react-redux";
import {ADD_TODO, DELETE_TODO} from '../redux/Todos';

const Todo = () =>{
    const todos =useSelector((state)=>{
        return state.Todos
    })
    const [inputdata,setInputdata] = useState('')
    const dispatch = useDispatch();
    const handleChange=(e)=>{
        setInputdata(e.target.value)

    }
    return(
        <>
        <div>
            <input type="text" placeholder="Add Items" value={inputdata} onChange={handleChange}></input>
            <button onClick={()=>dispatch(ADD_TODO(inputdata), setInputdata(' '))}>ADD TODOS</button>
        </div>
        <div>
     
        {todos.map((todo,index)=>(
                // <li id={todo.id} name={todo.name}></li>
                <div key = {index}>
                    <p>{todo.id}</p>
                    <p>{todo.name}</p>
                    <button onClick={()=>dispatch(DELETE_TODO({id: todo.id}))}>DELETE TODOS</button>
                </div>
                
            ))}
      
        </div>

        </>
    
    )
}
export default Todo;