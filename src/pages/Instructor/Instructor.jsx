import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import img1 from '../../assets/banner/banner1.jpg'
import useInstructor from "../../hooks/useInstructor";
import InstructorDetails from "../../Shared/InstructorDetails/InstructorDetails";
import InstructorRoleDetails from "../InstructorRoleDetails/InstructorRoleDetails";

const Instructor = () => {
    const [instructors, ,instructorUsers] = useInstructor();
   // console.log('10 ins',instructorUsers[2])
    return (
        <div>
            <Helmet>
                <title>United Sports | Instructor</title>

            </Helmet>
            <Cover img={img1} title={"Instructor"} link={"instructor"}></Cover>
            <div className="flex min-h-screen items-center justify-center bg-stone-400">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {
                        instructors.map(instructor =>

                            <InstructorDetails key={instructor._id} instructor={instructor}></InstructorDetails>
                        )
                    }

                </div>


            </div>
            <div className="flex min-h-screen items-center justify-center bg-stone-400">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {
                       
                        instructorUsers.map(instructor =>
                                
                            <InstructorRoleDetails key={instructor._id} instructor={instructor} instructorRole={instructor.role}></InstructorRoleDetails>
                        )
                    }

                </div>


            </div>
        </div>
    );
};

export default Instructor;