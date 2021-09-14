import React, { useEffect } from "react";
import date from "date-and-time";
import Footer from "./Footer";
import { useAnimate } from "react-simple-animate";
function Post({ data }) {
  const url = data.hdurl ? data.hdurl : data.url;
  const parsedDate = date.parse(data.date, "YYYY-MM-DD");
  const dateTitle = date.format(parsedDate, "YYYY MM DD");
  const { play, style } = useAnimate({
    start: { opacity: 0, transform: "translateY(-30px)" },
    end: { opacity: 1, transform: "translateY(0px)" },
    duration: 0.5,
  });
  useEffect(() => {
    play(true);
  }, []);
  let video = false;
  if (data.media_type == "video") {
    video = true;
  }
  return (
    <div style={style} className="post-container">
      <h2>{dateTitle}</h2>
      <h1>{data.title} </h1>

      {video ? (
        <div>
          <iframe
            style={{ margin: "auto", maxWidth: "100%" }}
            src={url}
          ></iframe>
        </div>
      ) : (
        <div className="image-wrapper">
          <img className="apod-image" src={url} alt={data.title} />
        </div>
      )}

      <p>{data.explanation}</p>
      <Footer />
    </div>
  );
}

export default Post;
