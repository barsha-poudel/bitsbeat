export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO ='DELETE_TODO';
export const add_todo = (data) =>{
return(
    {
        type: 'ADD_TODO',
        payload:{
            id: Math.random(),
            data:data
        }

    }
)
}
export const delete_todo =(id) =>{
    return(
        {
            type:'DELETE_TODO',
            payload: {id}
        }
    )
}

