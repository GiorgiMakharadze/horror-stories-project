import Image from "next/image";
import React from "react";
import styles from "./logo.module.scss";
import logoPhoto from "../../public/images/horror.png";

const logo = () => {
  return (
    <div className={styles.logo}>
      <Image src={logoPhoto} alt="" height={80} width={80} />
      <h1>Horror Stories</h1>
    </div>
  );
};

export default logo;
