import React, { useState, useEffect } from "react";
import Post from "../../components/Post";
import Link from "next/link";
import Nav from "../../components/Nav";
import Head from "next/head";
import date from "date-and-time";
import { useRouter } from "next/router";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export async function getServerSideProps(context) {
  const dateKey = context.params.dateParam;
  const api = process.env.NEXT_PUBLIC_API;
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${api}&date=${dateKey}`
  );
  const data = await res.json();
  if (data.code === 400) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
}

function PostPage({ data }) {
  const router = useRouter();
  const { dateParam } = router.query;
  const [like, setLike] = useState();

  const now = new Date();
  const currDate = date.format(now, "YYYY-MM-DD");
  const prevDate = getDate(dateParam, -1);
  const nextDate = getDate(dateParam, 1);

  useEffect(() => {
    const likeStatus = localStorage.getItem(dateParam);

    if (likeStatus === "true") {
      setLike(true);
    } else {
      setLike(false);
    }
  }, []);

  function onLike() {
    if (like === true) {
      localStorage.setItem(dateParam, false);
      setLike(false);
    } else {
      localStorage.setItem(dateParam, true);
      setLike(true);
    }
  }

  return (
    <>
      <div className="container">
        <Head>
          <title>{data.title}</title>
          <meta name="description" content={data.explanation} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <div className="nav-btn-wrapper">
          <Link href={`/${prevDate}`}>
            <button
              data-message="go to previous day"
              className="btn navigation-btn navigation-btn-left "
            >
              <BiChevronLeft />
            </button>
          </Link>

          {like ? (
            <button
              data-message="unlike this photo"
              className="btn heart-btn heart-btn-full"
              onClick={onLike}
            >
              <AiFillHeart />
            </button>
          ) : (
            <button
              data-message="like this photo"
              className="btn heart-btn heart-btn-outlined"
              onClick={onLike}
            >
              <AiOutlineHeart />
            </button>
          )}
          {dateParam != currDate && (
            <Link href={`/${nextDate}`}>
              <button
                data-message="go to the next day"
                className="btn navigation-btn"
              >
                <BiChevronRight />
              </button>
            </Link>
          )}
        </div>

        <Post data={data} />
      </div>
    </>
  );
}

function getDate(dateParam, day) {
  const parsedDate = date.parse(dateParam, "YYYY-MM-DD");
  const newDate = date.addDays(parsedDate, day);
  const parsedNewDate = date.format(newDate, "YYYY-MM-DD");
  return parsedNewDate;
}

export default PostPage;
