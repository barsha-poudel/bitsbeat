import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    list: []
}
export const todosSlice = createSlice({
    name: 'Todos',
    initialState:[],
    reducers:{
        ADD_TODO:(state, action)=> {
            let newList = state
            const newTodo ={
                id: Math.random(),
                name: action.payload
            }
            newList.push(newTodo)
            return  newList
        },
        DELETE_TODO:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload.id)
        }
    }
})
export const {ADD_TODO, DELETE_TODO} = todosSlice.actions;
export default todosSlice.reducer;