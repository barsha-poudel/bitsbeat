import rootReducer from './rootReducer'
export default function reducer (state={}, action){
    return{
        rootReducer : rootReducer(state.rootReducer,action)
    };
}