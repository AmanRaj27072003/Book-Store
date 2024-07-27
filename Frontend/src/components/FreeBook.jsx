import React, { useEffect, useState } from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import axios from "axios";
import Slider from "react-slick";
import Cards from "./Cards";

function FreeBook() {
  // const [book, setBook] = useState([]);
  // useEffect(() => {
  //   const getBook = async () => {
  //     try {
  //       const res = await axios.get("/http://localhost:4001/book");

  //       const data = res.data.filter((data) => data.category === "free");
  //       console.log(res.data);
  //       setBook(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getBook();
  // }, []);
  const filterData = list.filter((data) => data.category === "free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        className="max-w-screen-2xl container mx-auto md:px-20 px-4"
        id="free"
      >
        <div>
          <h1 className="font-bold text-xl pb-2">Our Free Experience</h1>
          <p>
            Indulge in a world of boundless imagination and diverse narratives,
            where each turn of the page unfolds new adventures, emotions, and
            knowledge, all without leaving your seat. <br /> Come explore the{" "}
            <span className="text-pink-400"> free experience</span> with us.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} id={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
