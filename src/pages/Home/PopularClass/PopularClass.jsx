import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./PopularClass.css";
import { EffectCoverflow, Pagination } from "swiper";
import useClasses from "../../../hooks/useClasses";
import SectionTitle from "../../../components/SectionTitle";


//import img1 from '../../../assets/class/cricket.jpg'

const PopularClass = () => {
    
    const [classes] = useClasses();
    
    const sortedArray = [...classes].sort((a, b) => {
        return b.students - a.students ; // Assuming each element has a property called 'number'
      });
      
    return (
        <>
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
                { sortedArray.slice(0,6).map(cla=><>
                    <SwiperSlide key={cla._id}>
                            <img className="h-[300px] w-[300px]" src={cla.picture} />
                            <h3 className="text-4xl text-white uppercase text-center -mt-12">{cla.title}</h3>
                        </SwiperSlide>
                   
                </>)
                    
                
                }

            </Swiper>
        </>
    );
};

export default PopularClass;