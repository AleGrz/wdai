import { useNavigate } from "react-router-dom";

function Add() {
  let nav = useNavigate();
  function handleSubmit(_: any) {
    const title = document.querySelector("input")?.value;
    const content = document.querySelector("textarea")?.value;
    if (!title || !content) {
      return;
    }
    const articles = JSON.parse(
      localStorage.getItem("articles") || JSON.stringify({ data: [] })
    );
    articles.data.push({ title, content });
    localStorage.setItem("articles", JSON.stringify(articles));
    nav("/blog");
  }
  return (
    <form>
      <span>Title:</span>
      <input type="text" />
      <span>Content:</span>
      <textarea></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Add;
