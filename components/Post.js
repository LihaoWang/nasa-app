import React from "react";
import date from "date-and-time";
function Post({ data }) {
  const url = data.hdurl ? data.hdurl : data.url;
  const parsedDate = date.parse(data.date, "YYYY-MM-DD");
  const dateTitle = date.format(parsedDate, "YYYY MM DD");
  return (
    <div className="container">
      <h2>{dateTitle}</h2>
      <h1>{data.title} </h1>
      <p>{data.explanation}</p>

      <div className="image-wrapper">
        <img className="apod-image" src={url} />
      </div>
    </div>
  );
}

export default Post;
