import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { get_posts_fetch } from "./actions/index";
function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.myReducer.posts);
  return (
    <div>
      <h1>This is REdux- SAga</h1>
      <button
        onClick={() => dispatch(get_posts_fetch())}
        //  onClick={() => {
        //   fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then((response) => response.json())
        //     .then((data) => console.log(data));
        // }}
      >
        Getposts
      </button>
      <div>
        posts:
        {posts.map((post, index) => (
          <div key={index}>
            {post.userId}
            <br />
            {post.id}
            <br />
            {post.title}
            <br />
            {post.body}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
