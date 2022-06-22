import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count:0,
    new:10,
    value:0,
}
export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment: (state,value) =>{
            console.log(value.payload)
            state.count +=value.payload
        },
        decrement: (state,value) =>{
            state.count -=value.payload
        },
},


});
export const {increment , decrement} = counterSlice.actions
export default counterSlice.reducer;