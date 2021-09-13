import "../styles/globals.css";
import Router from "next/router";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  const router = useRouter();
  return <>{loading ? <Loader /> : <Component {...pageProps} />}</>;
}

export default MyApp;
