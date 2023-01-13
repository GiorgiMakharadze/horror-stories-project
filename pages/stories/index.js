import { useState } from "react";
import Link from "next/link";
import styles from "./stories.module.scss";

const storiesPage = ({ stories }) => {
  const [show, setShow] = useState(false);

  if (!stories) return <h1>Loading</h1>;

  return (
    <div className={styles.maincContainer}>
      {stories.map((story) => {
        return (
          <div key={story.id} className={styles.secondaryContainer}>
            <Link href={`/stories/${story.id}`}>
              <section>
                <h1>{story.title}</h1>
                <h2>{story.category}</h2>
              </section>
            </Link>

            {show && <p>{story.text}</p>}
          </div>
        );
      })}
    </div>
  );
};
export async function getStaticProps() {
  const response = await fetch(
    "https://horror-stories-432d7-default-rtdb.firebaseio.com/fictional.json"
  );
  const data = await response.json();

  const stories = [];

  for (const key in data) {
    stories.push({
      id: key,
      ...data[key],
    });
  }

  return {
    props: {
      stories,
    },
  };
}

export default storiesPage;
