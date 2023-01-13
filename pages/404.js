import { useEffect } from "react";
import Router from "next/router";
import Image from "next/image";
import ErrorPhoto from "../public/images/wrong-turn.jpg";
import styles from "../styles/404.module.scss";

const ErrorPage = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 5000);
  }, []);

  return (
    <div className={styles.error}>
      <h1>404 Error! Page Not Found !</h1>
      <Image src={ErrorPhoto} alt="wrong turn img" height={320} width={560} />
    </div>
  );
};

export default ErrorPage;
