import CommentsPage from "../api/comments/index";
import { useRouter } from "next/router";
import styles from "./individualstory.module.scss";

const Story = ({ story }) => {
  if (!story) {
    return <h1>story not found</h1>;
  }
  const router = useRouter();

  const goBackHandler = () => {
    return router.back();
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.secondaryContainer}>
        <h1>{story.title}</h1>
        <h2>{story.category}</h2>
        <button onClick={goBackHandler}>go back</button>
        <p>{story.text}</p>
      </div>
      <CommentsPage />
    </div>
  );
};
0;
export default Story;

export async function getStaticPaths() {
  try {
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

    const paths = stories.map((story) => {
      return {
        params: {
          storiesId: `${story.id}`,
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
    router.push("404");
  }
}
export async function getStaticProps(context) {
  const { params } = context;
  try {
    const response = await fetch(
      `https://horror-stories-432d7-default-rtdb.firebaseio.com/fictional/${params.storiesId}.json`
    );
    const data = await response.json();

    if (!response.ok) {
      return {
        props: {
          stories: null,
        },
      };
    }

    return {
      props: {
        story: data,
      },
    };
  } catch (err) {
    console.log(err);
    router.push("404");
  }
}
