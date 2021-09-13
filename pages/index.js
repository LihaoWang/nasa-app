import Head from "next/head";

import { useState, useEffect } from "react";
import date from "date-and-time";
import Nav from "../components/Nav";

export async function getServerSideProps(context) {
  const now = new Date();
  const endFormatted = date.format(now, "YYYY-MM-DD");
  const start = date.addDays(now, -6);
  const startFormatted = date.format(start, "YYYY-MM-DD");

  const api = process.env.NEXT_PUBLIC_API;
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${api}&start_date=${startFormatted}&end_date=${endFormatted}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default function Home({ data }) {
  const [like, setLike] = useState();
  const [count, setCount] = useState(0);
  // const { colors } = useImageColor(data.hdurl, { cors: true, colors: 2 });
  // console.log(colors);
  const key = data[count].date.toString();
  useEffect(() => {
    const likeStatus = localStorage.getItem(key);
    if (likeStatus === "true") {
      setLike(true);
    } else {
      setLike(false);
    }
  }, []);
  useEffect(() => {
    const likeStatus = localStorage.getItem(key);
    if (likeStatus === "true") {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [count]);
  function onClick() {
    if (like === true) {
      localStorage.setItem(key, false);
      setLike(false);
    } else {
      localStorage.setItem(key, true);
      setLike(true);
    }
  }
  function prevPic() {
    if (count - 1 < 0) {
      setCount(6);
    } else {
      setCount((count - 1) % 7);
    }
  }
  function nextPic() {
    setCount((count + 1) % 7);
  }

  return (
    <div className="container">
      <Head>
        <title>Spacestagram</title>
        <meta name="description" content="Astronomy Picture of the Day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="nav-btn-wrapper">
        <div className="like-btn" onClick={prevPic}>
          left
        </div>
        {like === true ? (
          <div className="like-btn" onClick={onClick}>
            unlike
          </div>
        ) : (
          <div className="like-btn" onClick={onClick}>
            like
          </div>
        )}

        <div className="like-btn" onClick={nextPic}>
          right
        </div>
      </div>
      <h1>{data[count].title} </h1>
      <p className="explain">{data[count].explanation}</p>

      <div className="image-wrapper">
        <img className="apod-image" src={data[count].url} />
      </div>
    </div>
  );
}
