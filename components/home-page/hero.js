import Link from "next/link";
import styles from "./hero.module.scss";

const hero = () => {
  return (
    <div className={styles.hero}>
      <header>
        <h1>Read and be terrified !</h1>
      </header>
      <main>
        <h2>
          This is a horror stories Site. Here you can read other people's
          stories and add your own !
        </h2>
      </main>
      <section>
        <Link className={styles.link} href="/logIn">
          Log In
        </Link>
        <Link className={styles.link} href="/signup">
          Sing Up
        </Link>
      </section>
    </div>
  );
};

export default hero;
