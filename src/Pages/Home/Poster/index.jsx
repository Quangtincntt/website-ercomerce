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
                return (
                  <SwiperSlide key={index} className="">
                    <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                      <div className="flex items-center justify-center">
                        <img
                          src={val.img}
                          alt={`img/story/${index}`}
                          className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                        />
                      </div>
                      <div className="flex items-center justify-between w-full px-4">
                        <div className="flex items-center gap-0.5">
                          <span className="text-xs font-bold">{val.like}</span>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <span className="text-xs font-bold">{val.time}</span>
                        </div>
                        <div className="flex items-center gap-0.5">
                          <span className="text-xs font-bold text-blue-600">
                            {val.by}
                          </span>
                        </div>
                      </div>
                      <div className="grid items-center justify-items-start px-4">
                        <p className="text-sm text-justify lg:text-xs">
                          {val.text}
                        </p>
                      </div>
                      <div className="flex items-center justify-center px-4 w-full">
                        <a
                          rel="noopener noreferrer"
                          href={val.url}
                          target="_blank"
                          role={"button"}
                          className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme"
                        >
                          {val.btn}
                        </a>
                      </div>
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
