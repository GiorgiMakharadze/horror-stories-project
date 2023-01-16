import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./comments.module.scss";

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const route = useRouter();

  const fetchComment = async () => {
    try {
      const getResponse = await fetch("/api/comments");
      const getData = await getResponse.json();
      setComments(getData);
    } catch {
      route.push("/commentsError");
    }
  };

  useEffect(() => {
    const commentsFromStorage = JSON.parse(sessionStorage.getItem("comments"));
    if (commentsFromStorage) {
      setComments(commentsFromStorage);
      fetchComment();
    }
  }, []);

  const submitComments = async (e) => {
    e.preventDefault();
    if (name.trim().length === 0 || comment.trim().length === 0) {
      return;
    }
    try {
      //POST  request
      const postResponse = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({ comment, name }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const postData = await postResponse.json();

      //GET request
      const getResponse = await fetch("/api/comments");
      const getData = await getResponse.json();
      setComments(getData);

      fetchComment();
      sessionStorage.setItem("comments", JSON.stringify(getData));
    } catch {
      route.push("/commentsError");
    }
  };

  const deleteComment = async (commentId) => {
    try {
      const response = await fetch(`/api/comments/${commentId}`, {
        method: "DELETE",
      });

      const updatedComments = comments.filter((c) => c.id !== commentId);
      setComments(updatedComments);

      sessionStorage.removeItem("comments", JSON.stringify(updatedComments));
    } catch {
      route.push("/commentsError");
    }
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
          <p>
            <span>{comment.Important}</span>
          </p>
          <button onClick={() => deleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default CommentsPage;
