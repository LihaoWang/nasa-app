import Link from "next/link";
export default function Custom404() {
  return (
    <div className="container">
      <img style={{ maxWidth: "100%" }} alt="page not found" src="404.svg" />
      <h1 style={{ color: "#1d2445" }}>404 - Page Not Found</h1>
      <Link href="/">
        <div className="btn back-btn">Go back</div>
      </Link>
    </div>
  );
}
