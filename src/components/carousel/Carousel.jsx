import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative} from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-creative';
import "swiper/css";
import "swiper/css/bundle";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";


const Carousel = () => {
    return (
        <div className="">
            <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, EffectCreative]}
                loop={true}
                className="mySwiper  w-[98%] h-[500px] rounded-lg"
            >
                <SwiperSlide className="">
                    <div className=""
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img1})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            color: "WHITE",
                            fontSize: "5rem",
                        }}>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="">
                    <div className=""
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img2})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            color: "WHITE",
                            fontSize: "5rem",
                        }}>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="">
                    <div className=""
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img3})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            color: "WHITE",
                            fontSize: "5rem",
                        }}>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="">
                    <div className=""
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img4})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            color: "WHITE",
                            fontSize: "5rem",
                        }}>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="">
                    <div className=""
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img5})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            color: "WHITE",
                            fontSize: "5rem",
                        }}>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Carousel;