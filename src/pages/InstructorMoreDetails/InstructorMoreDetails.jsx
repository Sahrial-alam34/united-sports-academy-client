import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const InstructorMoreDetails = () => {
    const instructor = useLoaderData();
    const {title,email,name,picture,numberOfClass} = instructor
    //console.log(instructor)
    return (
        <>
            <Helmet>
                <title>United Sports | Instructor Details</title>

            </Helmet>
            <div className="my-container">
                <div >
                    <h1 className="text-center font-bold text-2xl mb-5">{name} Instructor </h1>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure className="lg:w-1/2 "><img className="h-96 w-full" src={picture} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl md:text-3xl font-medium mt-5 mb-3">Class Name: {title}</h2>
                            
                            <p className="text-green-600">Instructor Email: {email}</p>
                            <p>Number of Classes: {numberOfClass}</p>

                    
          

                        </div>
                    </div>


                </div>
            </div></>
    );
};

export default InstructorMoreDetails;