import Head from "next/head";
import Link from "next/link";
import date from "date-and-time";

export default function Home() {
  const now = new Date();
  const newDate = date.format(now, "YYYY-MM-DD");
  return (
    <div className="index-container">
      <Head>
        <title>Spacestagram</title>
        <meta
          name="description"
          content="Astronomy Picture of the Day from NASA"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <h1>Spacestagram</h1>
        <h2>Daily stunning picture from NASA</h2>
        <Link href={`/${newDate}`}>
          <div className="cta-btn btn">
            Explore
            <span style={{ marginLeft: "5px" }} role="img" aria-label="rocket">
              🚀
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
