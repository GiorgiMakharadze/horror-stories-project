import { useState } from "react";
import Link from "next/link";
import styles from "./stories.module.scss";
import Head from "next/head";

const storiesPage = ({ stories }) => {
  const [show, setShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (!stories) return <h1>Loading</h1>;

  const Dropdown = (
    <select
      className={styles.dropdown}
      onChange={(e) => setSelectedCategory(e.target.value)}
      value={selectedCategory}
    >
      <option value="all" className={styles.option}>
        All
      </option>
      <option value="Real Stories" className={styles.option}>
        Real stories
      </option>
      <option value="Serial killers" className={styles.option}>
        Serial killers
      </option>
      <option value="Legends" className={styles.option}>
        Legends
      </option>
    </select>
  );

  return (
    <>
      <Head>
        <title>All stories</title>
        <meta name="description" content="All stories" />
      </Head>
      <div className={styles.mainDiv}>
        {Dropdown}
        <div className={styles.mainContainer}>
          {stories
            .filter((story) => {
              if (selectedCategory === "all" && "legends") return true;
              return story.category === selectedCategory;
            })
            .map((story) => {
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
      </div>
    </>
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
