import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const AdminFeedback = () => {
    const sportsClass = useLoaderData();
    const { picture, Price, title, availableSeat, students, instructorName,_id } = sportsClass
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(feedback);
       // const feedback = { status: "denied" };
        //console.log('roleadmin', role)
        //setIsButtonDisabled(true);


        fetch(`http://localhost:5000/feedback/admin/${_id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({feedback})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                   
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Feedback is send to ${instructorName} !`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })



        setFeedback('');

    };
    return (
        <>
            <div className="card w-[450px]  bg-base-100 shadow-xl h-60 mb-5">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Instructor Name {instructorName}</p>
                    <div className="flex">
                        <p>Price {Price}</p>
                        <p> Students {students}</p>
                        <p> Available Seat {availableSeat}</p>
                    </div>

                </div>
            </div>
            <div className="w-[500px] flex items-center justify-center bg-gray-100">
                <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md">
                    <h2 className="text-2xl font-bold mb-6">Feedback</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="feedback" className="block mb-2 font-medium text-gray-800">Your Feedback</label>
                            <textarea
                                id="feedback"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                                rows={4}
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="rounded-full w-full btn btn-outline bg-purple-500 text-white border-0 border-b-4  hover:text-[#BB8506]"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div></>
    );
};

export default AdminFeedback;