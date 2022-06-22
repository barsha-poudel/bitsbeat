import types from "./types"

const login_request =()=>{
    return(
        {type: types.LOGIN_REQUEST}
    )
}
const login_success =()=>{
    return(
        {type: types.LOGIN_SUCCESS}
    )
}
const login_error =()=>{
    return(
        {type: types.LOGIN_ERROR}
    )
}