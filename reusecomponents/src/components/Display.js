const Display = (props) => {
  console.log(props, props.key);
  return (
    <div>
      <ul>
        <li>{props.student.firstname}</li>
        <li>{props.student.lastname}</li>
        <li>{props.student.age}</li>
        </ul>
    </div>
  );
};
export default Display;
