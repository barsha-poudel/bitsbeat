import types from '../actions/types'
const initialState = {
    message:[],
    loading: false,
}
const rootReducer =(state= initialState,action)=>{
    switch(action.type){
        case types.LOGIN_REQUEST:
            return{...state,loading:true};

        case types.LOGIN_SUCCESS:
            return{...state};
        case types.LOGIN_ERROR:
            return{...state};
        default:
            return state;


    }
}
export default rootReducer;