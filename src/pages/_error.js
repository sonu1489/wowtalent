import Head from "next/head";
import styles from "../styles/Error.module.css";

const Error = ({ statusCode }) => {
  if (!statusCode) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Error</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {statusCode
            ? `An error ${statusCode} occurred on the server`
            : "An error occurred on the client"}
        </h1>
      </main>
    </div>
  );
};

export async function getServerSideProps({ res, err }) {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { props: { statusCode } };
}

export default Error;
