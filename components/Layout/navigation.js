import Link from "next/link";
import Logo from "./logo";
import styles from "./navigation.module.scss";

const navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} href="/stories">
        See All Stories
      </Link>
      <Link href="/">
        <Logo />
      </Link>
      <Link className={styles.link} href="/addyourstorie">
        Add Your Story
      </Link>
    </nav>
  );
};

export default navigation;
