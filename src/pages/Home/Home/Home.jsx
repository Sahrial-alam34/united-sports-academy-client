import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Facility from "../Facility/Facility";




const Home = () => {
    return (
        <div className="my-container">
            <Helmet>
                <title>United Sports | Home</title>

            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <Facility></Facility>
            {/* <Loader></Loader> */}
            
        </div>
    );
};

export default Home;