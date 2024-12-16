import React from "react";
import Comment from "./comment";

interface CommentProps {
  id: number;
  body: string;
  likes: number;
  postId: number;
  user: {
    fullName: string;
    username: string;
  };
}

function Comments() {
  const [comments, setComments] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dummyjson.com/comments").then((response) => {
      response.json().then((data) => {
        setComments(data["comments"]);
      });
    });
  }, []);
  return (
    <div>
      {comments.map((data: CommentProps, i) => {
        return (
          <Comment
            key={i}
            id={i}
            postId={data.postId}
            body={data.body}
            likes={data.likes}
            user={data.user}
          />
        );
      })}
    </div>
  );
}

export default Comments;
