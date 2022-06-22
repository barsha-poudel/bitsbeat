// const Directlypropspassingchild = (props) =>{
//     return(
//         <div>
//         {props.myfn}
//         </div>
//     )
// }

// const Directlypropspassingchild = (props) =>{
//     return(
//         <div>
//             {props.main}

//         </div>
//     )
// }
// export default Directlypropspassingchild;

const Directlypropspassingchild = (props) =>{
    props.app("hello there");   //------------------------passing props from child component to parent component.
    return(
        <div>
        
        </div>
    )
}
export default Directlypropspassingchild;

