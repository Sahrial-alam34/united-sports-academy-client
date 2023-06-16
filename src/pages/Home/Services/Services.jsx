import SectionTitle from "../../../components/SectionTitle";

import swimming from '../../../assets/service/swmmingpool.jpg'
import restRoom from '../../../assets/service/restRoom.jpg'
import canteen from '../../../assets/service/canteen.jpg'
import coach from '../../../assets/service/coach.jpg'
import gym from '../../../assets/service/gym.jpg'
import recovery from '../../../assets/service/recovery.jpg'
import outDoor from '../../../assets/service/patch.jpg'
import indoor from '../../../assets/service/indoor.jpg'


const Services = () => {
    return (
        <section className="mt-20">
            <SectionTitle subHeading={"Facility"} heading={"Facility of the Academy"}></SectionTitle>
            <div  className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="card w-80 h-[320px] bg-base-100   image-full">
                    <figure><img src={swimming} alt="" /></figure>
                    <div className="card-body flex  items-center">
                        <h2 className="card-title uppercase">Swimming Complex</h2>
                       
                    
                    </div>
                </div>
                <div className="card w-80 h-[320px]bg-base-100   image-full">
                    <figure><img src={restRoom} alt="" /></figure>
                    <div className="card-body flex  items-center">
                        <h2 className="card-title uppercase">Rest Room</h2>
                       
                    
                    </div>
                </div>
                <div className="card w-80 h-[320px] bg-base-100   image-full">
                    <figure><img src={canteen} alt="" /></figure>
                    <div className="card-body flex  items-center">
                        <h2 className="card-title uppercase">Healthy Food Canteen</h2>
                       
                    
                    </div>
                </div>
                <div className="card w-80 h-[320px] bg-base-100   image-full">
                    <figure><img src={coach} alt="" /></figure>
                    <div className="card-body flex  items-center">
                        <h2 className="card-title uppercase">Professional Coach</h2>
                       
                    
                    </div>
                </div>
                <div className="card w-80 h-[320px] bg-base-100   image-full">
                    <figure><img src={gym} alt="" /></figure>
                    <div className="card-body flex  items-center">
                        <h2 className="card-title uppercase">The Gym</h2>
                       
                    
                    </div>
                </div>
                <div className="card w-80 h-[320px] bg-base-100   image-full">
                    <figure><img src={recovery} alt="" /></figure>
                    <div className="card-body flex  items-center">
                        <h2 className="card-title uppercase">Player Recovery</h2>
                       
                    
                    </div>
                </div>
                <div className="card w-80 h-[320px] bg-base-100   image-full">
                    <figure><img src={outDoor} alt="" /></figure>
                    <div className="card-body flex  items-center">
                        <h2 className="card-title uppercase">OutDoor Pitches</h2>
                       
                    
                    </div>
                </div>
                <div className="card w-80 h-[320px]bg-base-100   image-full">
                    <figure><img src={indoor} alt="" /></figure>
                    <div className="card-body flex  items-center">
                        <h2 className="card-title uppercase">Indoor Pitches</h2>
                       
                    
                    </div>
                </div>
             
            </div>
        </section>

    );
};

export default Services;