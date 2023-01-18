import Link from "next/link";
import Logo from "./logo";
import styles from "./navigation.module.scss";

const navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.mainDiv}>
        <Link className={styles.link} href="/stories">
          See All Stories
        </Link>
        <Link href="/" className={styles.mainLogo}>
          <Logo />
        </Link>
        <div className={styles.secondDiv}>
          <Link className={styles.link2} href="/addyourstory">
            Add Your Story
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default navigation;
