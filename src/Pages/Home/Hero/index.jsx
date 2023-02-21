// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
const slider = [
  "https://removal.ai/wp-content/uploads/2022/03/remove-background-from-shoe-images.jpg",
  "https://wallpapercave.com/wp/wp5085658.jpg",
  "https://i.insider.com/61f31baf792e7300116bf644?width=1200&format=jpeg",
  "https://imgix.bustle.com/uploads/image/2021/9/1/6254287b-845e-4c2c-82ae-6dcc6c6fb133-inputmag_sneakers_v02_090121-copy.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
  "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5387496921001/b501e518-4f83-494e-9c23-808c8686b139/80c68ee6-2c97-4871-9035-1fcbfef5f3c4/1280x720/match/image.jpg",
];
function Hero() {
  return (
    <div className="">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {slider.map((item) => {
          return (
            <SwiperSlide>
              <img className="h-500 w-full md:h-80" src={item} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Hero;
