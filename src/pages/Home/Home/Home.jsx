import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Facility from "../Facility/Facility";
import About from "../About/About";
import Services from "../Services/Services";
import History from "../History/History";




const Home = () => {
    return (
        <>
            <Helmet>
                <title>United Sports | Home</title>

            </Helmet>
            <Banner></Banner>
           
            <PopularClass></PopularClass>
            <About></About>
            <PopularInstructor></PopularInstructor>
            <Services></Services>
           
            <Facility></Facility>
            <History></History>
            
            
        </>
    );
};

export default Home;