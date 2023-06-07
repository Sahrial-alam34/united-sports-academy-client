import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div className="my-container">
            <Helmet>
                <title>United Sports | Home</title>

            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;