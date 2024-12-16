import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Link to="/blog">Blogs</Link>
      <Link to="/add">Add</Link>
    </div>
  );
}

export default Home;
