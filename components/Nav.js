import React from "react";
import Link from "next/link";
function Nav() {
  return (
    <div style={{ width: "100%" }}>
      <div className="nav">
        <Link href="/">
          <h1>Spacestagram</h1>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
