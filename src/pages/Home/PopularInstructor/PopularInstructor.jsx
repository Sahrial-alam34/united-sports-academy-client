import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import InstructorDetails from "../../../Shared/InstructorDetails/InstructorDetails";


const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)


            })

    }, [])
    return (
        <section className="mt-20">
            <SectionTitle subHeading={"Top Instructor"} heading={"Most Popular Instructor In the Academy"}></SectionTitle>
            <div className="flex min-h-screen items-center justify-center bg-neutral-800">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {
                        instructors.map(instructor =>

                            <InstructorDetails key={instructor.id} instructor={instructor}></InstructorDetails>
                        )
                    }

                </div>


            </div>

        </section>
    );
};

export default PopularInstructor;