import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./PopularClass.css";
import { EffectCoverflow, Pagination } from "swiper";

import img1 from '../../../assets/class/cricket.jpg'
import SectionTitle from "../../../components/SectionTitle";
import { useEffect, useState } from "react";

const PopularClass = () => {
    const [classes, setClasses] = useState([])
    useEffect(()=>{
        fetch('sportsClass.json')
        .then(res => res.json())
        .then(data =>{
            setClasses(data)
        })

    },[])
    
    return (
        <section>
            <SectionTitle subHeading={"Top Classes"} heading={"Most Popular Classes In the Academy"}></SectionTitle>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="h-[300px] w-[300px]" src={img1} />
                    <h3 className="text-4xl text-white uppercase text-center -mt-12">Cricket</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-[300px] w-[300px]" src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-[300px] w-[300px]" src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-[300px] w-[300px]" src={img1} />
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default PopularClass;