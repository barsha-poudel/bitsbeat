const initialData = []
const TodoReducers = (state= initialData,action)=>{
    switch(action.type){
        case 'ADD_TODO': 
            const {id, data}= action.payload
            return [

                    ...state,//previous state ma initial data theyo vani tyo ni jancha jastai list ko previous  data plus aile ko state
                    {
                        id:id,
                        data: data
                    }
            ]
            
        case 'DELETE_TODO':
            console.log(state);
            return state.filter(Todos=>Todos.id!==action.payload.id)

        default: 
            return state
    }

}
export default TodoReducers;