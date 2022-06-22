import {configureStore} from '@reduxjs/toolkit';
import RootReducer from './reducer/index';
const store = configureStore({reducer : RootReducer})
store.subscribe(()=>
{
    console.log(store.getState())
})
export default store;