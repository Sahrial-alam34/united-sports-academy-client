import { Helmet } from "react-helmet-async";
import useClasses from "../../hooks/useClasses";
import SingleClass from "../../Shared/SingleClass/SingleClass";
import Cover from "../../Shared/Cover/Cover";


import img1 from '../../assets/banner/banner3.jpg'
const Classes = () => {
    const [classes] = useClasses();

    return (
        <section>
            <Helmet>
                <title>United Sports | Classes</title>

            </Helmet>
            <Cover img={img1} title={"Classes"} link={"classes"}></Cover>
            <div className="flex min-h-screen items-center justify-center bg-stone-400">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 my-5">
                    {
                        classes.map(cla =>
                            <SingleClass key={cla._id} cla={cla}></SingleClass>
                        )
                    }
                </div>
            </div>

        </section>
    );
};

export default Classes;