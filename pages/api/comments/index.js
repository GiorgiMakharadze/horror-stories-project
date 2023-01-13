import { useState } from "react";
import styles from "./comments.module.scss";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const fetchComment = async () => {
    const getResponse = await fetch("/api/comments");
    const getData = await getResponse.json();
    setComments(getData);
  };

  const submitComments = async (e) => {
    e.preventDefault();
    if (name.trim().length === 0 && comment.trim().length === 0) {
      return;
    }
    //POST  request
    const postResponse = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment, name }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const postData = await postResponse.json();
    console.log(postData);

    //GET request
    const getResponse = await fetch("/api/comments");
    const getData = await getResponse.json();
    setComments(getData);

    localStorage.setItem("comments", JSON.stringify(postData));
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    });
    // check if response
    console.log(response);
    // const data = await response.json();
    // console.log(data);

    window.localStorage.removeItem(commentId);
    fetchComment();
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <form>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <textarea
            placeholder="Enter Your Comment"
            className={styles.commentsInput}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </form>
        <button onClick={submitComments}>Submit</button>
      </div>
      {comments.map((comment, i) => (
        <div key={i} className={styles.commentsSection}>
          <h1>
            name - <span>{comment.name}</span>
          </h1>
          <p>
            commentary - <span>{comment.text}</span>
          </p>
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default CommentsPage;
