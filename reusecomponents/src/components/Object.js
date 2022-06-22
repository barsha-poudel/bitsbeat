import Display from "./Display";

const Object = () => {
  const Arrayofobjects = [
    { firstname: "joe", lastname: "biden", age: "62" },
    { firstname: "barak ", lastname: "obama", age: "53" },
  ];
  console.log(Arrayofobjects);
  return (
    <div>
   
      {Arrayofobjects.map((student, index)=> (
        <Display key={Math.random()*index} student={student} />
        ))}
      
    </div>
  );
};
export default Object;
