import "@/styles/globals.css";
import { useRouter } from "next/router";
import Custom404 from "../pages/404";
import styles from "../styles/BlogPage.module.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (!router.isFallback && router.statusCode === 404) {
    return <Custom404 {...pageProps} />;
  }

  if (router.statusCode === 404) {
    return <Custom404 {...pageProps} />;
  }
  return (
    <>
      <div className={styles.navbar}>
        <Link href="/">
          <img
            style={{ width: "260px" }}
            src="https://wowtalent.live/wp-content/themes/wow/asset/img/logo.png"
            alt="companyLogo"
          />
        </Link>
      </div>
      <Component {...pageProps} />
    </>
  );
}
