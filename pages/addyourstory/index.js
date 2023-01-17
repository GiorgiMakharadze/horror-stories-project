import { useRef } from "react";
import { useRouter } from "next/router";
import styles from "./yourstory.module.scss";

const YourStory = () => {
  const route = useRouter();

  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const storyRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const category = categoryRef.current.value;
    const story = storyRef.current.value;
    const data = { title: title, category: category, text: story };

    fetch(
      "https://horror-stories-432d7-default-rtdb.firebaseio.com/fictional.json",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch(() => {
        route.push("/uploadStoryError");
      });

    titleRef.current.value = "";
    categoryRef.current.value = "Real Stories";
    storyRef.current.value = "";
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.ImportantMessage}>
          <h1>Important !</h1>
          <p>You can't Change or Delete your story after submitting ! </p>
        </div>
        <h1>Add Your Storie</h1>
        <div className={styles.secondContainer}>
          <form>
            <input type="text" placeholder="Enter Title" ref={titleRef} />
            <br />
            <select ref={categoryRef}>
              <option value="Real Stories">Real Stories</option>
              <option value="Serial killers">Serial Killers</option>
              <option value="Legends">Legends</option>
            </select>
            <br />
            <textarea ref={storyRef} />
          </form>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default YourStory;
