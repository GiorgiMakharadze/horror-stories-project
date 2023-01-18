import Link from "next/link";
import Logo from "./logo";
import styles from "./navigation.module.scss";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import FBLogo from "../../public/images/fb.svg";
const navigation = () => {
  const { data: session } = useSession();

  return (
    <nav className={styles.nav}>
      <div className={styles.mainDiv}>
        <Link className={styles.link} href="/stories">
          See All Stories
        </Link>
        <Link href="/" className={styles.mainLogo}>
          <Logo />
        </Link>
      </div>
      <div className={styles.secondayDiv}>
        {!session && (
          <Link href="/api/auth/signin">
            <Image
              onClick={() => signIn()}
              src={FBLogo}
              alt="Facebook Logo"
              style={{ cursor: "pointer" }}
              className={styles.logo}
            />
          </Link>
        )}
        {session && (
          <div className={styles.fbLogo}>
            <Link className={styles.link} href="/addyourstory">
              Add Your Story
            </Link>
            <Link
              href="/api/auth/signout"
              className={styles.singout}
              onClick={() => signOut()}
            >
              sing Out
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default navigation;
