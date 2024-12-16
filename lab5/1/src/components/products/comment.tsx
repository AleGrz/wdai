import React from "react";
import styles from "./comment.module.css";

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

function Comment({ id, postId, body, likes, user }: CommentProps) {
  const [like, setLike] = React.useState(likes);
  return (
    <div className={styles.container}>
      <span className={styles.name}>
        {user.fullName} <span className={styles.postId}>#{postId}</span>
      </span>
      <span className={styles.nick}>@{user.username}</span>
      <span className={styles.body}>{body}</span>
      <input
        id={id.toString() + "up"}
        type="radio"
        name={id.toString()}
        onClick={(_) => {
          setLike(like - likes - 1 ? likes + 1 : likes);
          document.querySelectorAll("input").forEach((input) => {
            input.classList.remove("highlight");
          });
          if (like - likes - 1) {
            document
              .getElementById(id.toString() + "up")
              ?.classList.add("highlight");
          } else {
            document
              .getElementById(id.toString() + "up")
              ?.classList.remove("highlight");
          }
        }}
      />
      <label htmlFor={id.toString() + "up"}>▲</label>
      <span className={styles.likespan}>{like}</span>
      <input
        id={id.toString() + "down"}
        type="radio"
        name={id.toString()}
        onClick={(_) => {
          setLike(like - likes + 1 ? likes - 1 : likes);
          document.querySelectorAll("input").forEach((input) => {
            input.classList.remove("highlight");
          });
          if (like - likes + 1) {
            document
              .getElementById(id.toString() + "down")
              ?.classList.add("highlight");
          } else {
            document
              .getElementById(id.toString() + "down")
              ?.classList.remove("highlight");
          }
        }}
      />
      <label htmlFor={id.toString() + "down"}>▼</label>
    </div>
  );
}

export default Comment;
