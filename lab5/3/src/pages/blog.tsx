import { Link } from "react-router-dom";

function Blog() {
  const articles = JSON.parse(
    localStorage.getItem("articles") || JSON.stringify({ data: [] })
  )["data"];
  return (
    <div>
      <h1>Blogs</h1>
      {articles.map((article: any, i: number) => (
        <Link key={i} to={"/article/" + i.toString()}>
          {article.title}
        </Link>
      ))}
    </div>
  );
}

export default Blog;
