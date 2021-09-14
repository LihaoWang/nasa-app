import React from "react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="https://github.com/LihaoWang">
          <FaGithubAlt />
        </a>
        <a href="https://github.com/LihaoWang">
          <FaLinkedin />
        </a>
      </div>
      <p>
        Created by Leo Wang &copy; 2021{" "}
        <a href="https://api.nasa.gov/">| NASA APOD API</a>
      </p>
    </div>
  );
}

export default Footer;
