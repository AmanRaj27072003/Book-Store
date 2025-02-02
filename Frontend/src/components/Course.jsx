import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import list from "../../public/list.json";
// import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  // const [book, setBook] = useState([]);
  // useEffect(() => {
  //   const getBook = async () => {
  //     try {
  //       const res = await axios.get("/http://localhost:4001/book");
  //       console.log(res.data);
  //       setBook(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getBook();
  // }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-19 items-center justify-center text-center ">
          <h1 className="text-2xl pt-24  md:text-4xl">
            We welcome you here for
            <br />
            <span className="text-pink-400"> premium experience!!!</span>
          </h1>
          <p className="mt-10">
            Welcome to our premium reading website, where curated content meets
            exceptional reading experience. Unlock exclusive books, expertly
            curated collections, and personalized recommendations for a journey
            into literature's finest offerings. We hope for your best
            experience.
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
