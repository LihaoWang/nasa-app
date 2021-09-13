import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Link from "next/link";
import date from "date-and-time";
import Nav from "../components/Nav";
import { useRouter } from "next/router";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
export async function getServerSideProps(context) {
  const dateKey = context.params.dateParam;
  const api = process.env.NEXT_PUBLIC_API;
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${api}&date=${dateKey}`
  );
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

function PostPage({ data }) {
  const router = useRouter();
  const { dateParam } = router.query;
  const [like, setLike] = useState();

  const prevDate = getDate(dateParam, -1);
  const nextDate = getDate(dateParam, 1);
  useEffect(() => {
    const likeStatus = localStorage.getItem(dateParam);
    console.log(dateParam);
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
    <div className="container">
      <Nav />
      <div className="nav-btn-wrapper">
        <Link href={`/${prevDate}`}>
          <div className="btn navigation-btn">
            <AiFillCaretLeft />
          </div>
        </Link>
        <div className="btn heart-btn" onClick={onLike}>
          {like ? <AiFillHeart /> : <AiOutlineHeart />}
        </div>
        <Link href={`/${nextDate}`}>
          <div className="btn navigation-btn">
            <AiFillCaretRight />
          </div>
        </Link>
      </div>
      <Post data={data} />
    </div>
  );
}

function getDate(dateParam, day) {
  const parsedDate = date.parse(dateParam, "YYYY-MM-DD");
  const newDate = date.addDays(parsedDate, day);
  const parsedNewDate = date.format(newDate, "YYYY-MM-DD");
  return parsedNewDate;
}

export default PostPage;
