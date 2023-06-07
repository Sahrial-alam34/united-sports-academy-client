
//import img1 from '../../assets/instructor/image1.jpg'
const InstructorDetails = ({ instructor }) => {
    console.log('ins', instructor.picture)
    const { picture, name, title, email } = instructor
    return (

        <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={picture}alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className=" text-3xl font-bold text-white">{name}</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Category: {title}</p>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Email: {email}</p>
                <button className="rounded-full btn btn-outline text-[#BB8506] border-0 border-b-4 mt-4 hover:text-[#BB8506]">See More</button>
            </div>
        </div>




    );
};

export default InstructorDetails;