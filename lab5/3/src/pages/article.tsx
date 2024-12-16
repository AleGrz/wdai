import { useParams } from "react-router-dom";

function Article() {
  const { id } = useParams();
  const articles = JSON.parse(
    localStorage.getItem("articles") || JSON.stringify({data:[]})
  )["data"];
  return (
    <div>
      <h1>{articles[parseInt(id || "0")].title}</h1>
      <p>{articles[parseInt(id || "0")].content}</p>
    </div>
  );
}

export default Article;
