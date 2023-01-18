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
    </div>
  );
};

export default hero;
