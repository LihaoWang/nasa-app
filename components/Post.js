import React from "react";
import date from "date-and-time";
import Footer from "./Footer";
function Post({ data }) {
  const url = data.hdurl ? data.hdurl : data.url;
  const parsedDate = date.parse(data.date, "YYYY-MM-DD");
  const dateTitle = date.format(parsedDate, "YYYY MM DD");
  let video = false;
  if (data.media_type == "video") {
    video = true;
  }
  return (
    <div className="post-container">
      <h2>{dateTitle}</h2>
      <h1>{data.title} </h1>
      <div className="image-wrapper">
        {video ? (
          <iframe
            style={{ margin: "auto" }}
            width="420"
            height="315"
            src={url}
          ></iframe>
        ) : (
          <img className="apod-image" src={url} alt={data.title} />
        )}
      </div>

      <p>{data.explanation}</p>
      <Footer />
    </div>
  );
}

export default Post;
