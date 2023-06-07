
import SectionTitle from "../../../components/SectionTitle";
import InstructorDetails from "../../../Shared/InstructorDetails/InstructorDetails";
import useInstructor from "../../../hooks/useInstructor";


const PopularInstructor = () => {
    // const [instructors, setInstructors] = useState([])
    // useEffect(() => {
    //     fetch('instructors.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setInstructors(data)


    //         })

    // }, [])
    const [instructors] = useInstructor();
    return (
        <section className="mt-20">
            <SectionTitle subHeading={"Top Instructor"} heading={"Most Popular Instructor In the Academy"}></SectionTitle>
            <div className="flex min-h-screen items-center justify-center bg-stone-400">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {
                        instructors.map(instructor =>

                            <InstructorDetails key={instructor._id} instructor={instructor}></InstructorDetails>
                        )
                    }

                </div>


            </div>

        </section>
    );
};

export default PopularInstructor;