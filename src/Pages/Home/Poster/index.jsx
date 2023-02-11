import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import axios from "axios";

function Poster() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://json-sever-api.vercel.app/story")
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {};
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl my-12">TOP STORIES</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
      >
        {post.map((item, index) => {
          return (
            <div key={index}>
              {item.news.map((val, index) => {
                const { img, like, time, by, text, url, btn } = val;
                return (
                  <SwiperSlide key={index} className="">
                    <div className="bg-black p-2" key={index}>
                      <img src={img} alt="" />
                      <p className="my-4 text-white">{by}</p>
                      <p className="text-white my-2">{like}</p>
                      <p className="text-white">{time}</p>
                      <a href="https://www.nike.com/vn/">
                        <button className="bg-blue-300 my-4 text-white p-2">
                          {btn}
                        </button>
                      </a>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Poster;
