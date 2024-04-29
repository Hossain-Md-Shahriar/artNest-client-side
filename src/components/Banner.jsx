import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className="h-[calc(100vh-80px)]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        // centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="h-full"
      >
        <SwiperSlide>
          <div className="h-full bg-[url(https://i.ibb.co/ZKDxVLZ/Slide2.jpg)] bg-no-repeat bg-center bg-cover">
            <div className="size-full bg-gradient-to-r from-[#000000cb] via-[#fff0] via-60% to-[#fff0] p-14 lg:p-20 flex items-center">
              <div className="px-9 py-10 rounded-2xl max-w-[500px]">
                <Fade
                  cascade
                  direction="up"
                  duration={900}
                  damping={0.1}
                  delay={200}
                >
                  <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                    Paintings That Calm Your Soul
                  </h2>
                  <div className=" mt-4 border max-w-[220px] border-[#4793AF]"></div>
                  <p className="text-white mt-5 drop-shadow-lg hidden md:block">
                    Experience ultimate relaxation and indulgence in this luxury
                    resort retreat surrounded by pristine landscapes.
                  </p>
                </Fade>
                <button className="text-white text-lg font-semibold mt-6 py-3 px-5 bg-[#dd5846d0] rounded-md hover:bg-[#b34739] transition-all duration-150">
                  Exlore Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full bg-[url(https://i.ibb.co/cJkvVMQ/Slide1.png)] bg-no-repeat bg-center bg-cover">
            <div className="size-full bg-gradient-to-r from-[#000000cb] via-[#fff0] via-60% to-[#fff0] p-14 lg:p-20 flex items-center">
              <div className="px-9 py-10 rounded-2xl max-w-[500px]">
                <Fade
                  cascade
                  direction="up"
                  duration={900}
                  damping={0.1}
                  delay={200}
                >
                  <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                    Paintings That Calm Your
                  </h2>
                  <div className=" mt-4 border max-w-[220px] border-[#4793AF]"></div>
                  <p className="text-white mt-5 drop-shadow-lg hidden md:block">
                    Experience ultimate relaxation and indulgence in this luxury
                    resort retreat surrounded by pristine landscapes.
                  </p>
                </Fade>
                <button className="text-white text-lg font-semibold mt-6 py-3 px-5 bg-[#dd5846d0] rounded-md hover:bg-[#b34739] transition-all duration-150">
                  Exlore Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full bg-[url(https://i.ibb.co/1R2ppVJ/Slide3.png)] bg-no-repeat bg-center bg-cover">
            <div className="size-full bg-gradient-to-r from-[#000000cb] via-[#fff0] via-60% to-[#fff0] p-14 lg:p-20 flex items-center">
              <div className="px-9 py-10 rounded-2xl max-w-[500px]">
                <Fade
                  cascade
                  direction="up"
                  duration={900}
                  damping={0.1}
                  delay={200}
                >
                  <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                    Paintings That Calm Your Soul
                  </h2>
                  <div className=" mt-4 border max-w-[220px] border-[#4793AF]"></div>
                  <p className="text-white mt-5 drop-shadow-lg hidden md:block">
                    Experience ultimate relaxation and indulgence in this luxury
                    resort retreat surrounded by pristine landscapes.
                  </p>
                </Fade>
                <button className="text-white text-lg font-semibold mt-6 py-3 px-5 bg-[#dd5846d0] rounded-md hover:bg-[#b34739] transition-all duration-150">
                  Exlore Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
