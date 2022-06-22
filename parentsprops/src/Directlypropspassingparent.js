import Directlypropspassingchild from './Directlypropspassingchild';
// const Directlypropspassingparent = ()=>{
//     return(
//         <div>
//             <h4>
//                 Hello i am passing props from parent to children
//             </h4>
//             <Directlypropspassingchild myfn = "hello baby"/>---------------------props passing from parent to children
//         </div>

//     )
// }
// const Passingmethod =() =>{
//     const passingmethod2 = () =>{
//         console.log("hi there");
//     }
//     return(
//         <div>
//             <Directlypropspassingchild main = {passingmethod2()}/>------------------method passing from parent to children

//         </div>
//     )
// }


const Passingmethod = () => {
    const passingmethod2 =(data) =>{
        console.log(data);
    }
    return(
        <div>
            <h4>hello passing props from child to parent</h4>
            <Directlypropspassingchild app = {passingmethod2}/>
        </div>
    )
}
export default  Passingmethod;