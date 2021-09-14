import Link from "next/link";
import Head from "next/head";
export default function Custom404() {
  return (
    <div className="container">
      <Head>
        <title>Page doesn&apos;t exist</title>
        <meta name="description" content="Page doesn't exist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img style={{ maxWidth: "100%" }} alt="page not found" src="404.svg" />
      <h1 style={{ color: "#1d2445" }}>404 - Page Not Found</h1>
      <Link href="/">
        <button data-message="go back" className="btn back-btn">
          Go back
        </button>
      </Link>
    </div>
  );
}
