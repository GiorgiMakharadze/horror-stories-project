import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ErrorPhoto from "../public/images/wrong-turn.jpg";
import styles from "../styles/404.module.scss";

const CommetnsError = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.back();
    }, 2000);
  }, []);

  return (
    <div className={styles.error}>
      <h1> No comment found !</h1>
      <Image src={ErrorPhoto} alt="wrong turn img" height={320} width={560} />
    </div>
  );
};

export default CommetnsError;
