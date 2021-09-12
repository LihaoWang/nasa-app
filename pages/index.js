import Head from "next/head";
import useImageColor from "use-image-color";
import { useState, useEffect } from "react";

export async function getServerSideProps(context) {
  const api = process.env.NEXT_PUBLIC_API;
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api}`);
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
  const { colors } = useImageColor(data.hdurl, { cors: true, colors: 2 });
  console.log(colors);
  const key = data.date.toString();

  useEffect(() => {
    const likeStatus = localStorage.getItem(key);
    if (likeStatus === "true") {
      setLike(true);
    } else {
      setLike(false);
    }
  }, []);
  function onClick() {
    // localStorage.setItem(data.date.toString(), !like);

    if (like === true) {
      localStorage.setItem(key, false);
      setLike(false);
    } else {
      localStorage.setItem(key, true);
      setLike(true);
    }
  }
  return (
    <div className="container">
      <Head>
        <title>Astronomy Picture of the Day</title>
        <meta name="description" content="Astronomy Picture of the Day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{data.title} </h1>
      <p className="explain">{data.explanation}</p>
      {colors && (
        <div className="image-wrapper" style={{ backgroundColor: colors[1] }}>
          <img className="apod-image" src={data.hdurl} />
        </div>
      )}
      {like === true ? (
        <div className="like-btn" onClick={onClick}>
          unlike
        </div>
      ) : (
        <div className="like-btn" onClick={onClick}>
          like
        </div>
      )}
    </div>
  );
}
