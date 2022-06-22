// eslint-disable-next-line no-unused-vars
export const Incrementcounter = (num) =>{
    return(
        {
            type:"INCREMENT",
            payload:num
        }
    )
}
// eslint-disable-next-line no-unused-vars
export const Decrementcounter = () =>{
    return(
        {
            type:"DECREMENT"
        }
    )
}