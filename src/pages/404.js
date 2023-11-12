import React from "react";
import styles from "../styles/404.module.css";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className={styles.container}>
      <h3 className="h2">Look like you're lost</h3>
      <p>The page you are looking for not avaible!</p>
      <Link href="/" className="link_404">
        Go to Home
      </Link>
    </div>
  );
};

export default Custom404;
