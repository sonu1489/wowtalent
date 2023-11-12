import "@/styles/globals.css";
import { useRouter } from "next/router";
import Custom404 from "../pages/404";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (!router.isFallback && router.statusCode === 404) {
    return <Custom404 {...pageProps} />;
  }

  if (router.statusCode === 404) {
    return <Custom404 {...pageProps} />;
  }
  return <Component {...pageProps} />;
}
