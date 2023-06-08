
const SingleClass = ({ cla }) => {

    const { picture, title, instructorName, availableSeat, students } = cla;
    return (
        <div className="card w-96 bg-base-100 shadow-xl cursor-pointer group ">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl h-[250px] w-[390px] group-hover:scale-150" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className="font-bold">Instructor Name: {instructorName}</p>
                <div className="flex gap-8">
                    <p>Seats Available: {availableSeat}</p>
                    <p>Total Students:{students}</p>
                </div>
                <button className="rounded-full btn btn-outline bg-slate-200 text-[#BB8506] border-0 border-b-4 mt-4 hover:text-[#BB8506]">Selected The Course</button>
            </div>
        </div>
    );
};

export default SingleClass;