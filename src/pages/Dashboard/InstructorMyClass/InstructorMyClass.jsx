import { Helmet } from "react-helmet-async";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";


const InstructorMyClass = () => {

    const { user } = useContext(AuthContext)
    //console.log('user 10 ', user.email)
    const [singleInstructor, setSingleInstructor] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/singleInstructor/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setSingleInstructor(data)
                setLoading(false);
            })
    }, [user?.email])

 

    return (
        <div>
            <Helmet>
                <title>United Sports | My Class</title>

            </Helmet>
            <div className="font-bold flex justify-evenly gap-10 items-center h-[60px]">
                <h3 className="text-3xl">My Class Information</h3>


            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full bg-gray-300">
                    {/* head */}
                    <thead>
                        <tr className="bg-purple-500 text-white ">
                            <th> # </th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Price</th>
                            <th>Enrolled Students</th>
                            <th>Available Seat</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            singleInstructor.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.picture} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        {item.title}
                                    </div>


                                </td>
                                <td>
                                    {item.instructorName}
                                </td>
                                <td>
                                    {item.postedBy}
                                </td>
                                <td className="text-end">${item.Price}</td>
                                <td className="text-center">
                                    {item.students}
                                </td>
                                <td className="text-center">
                                    {item.availableSeat}
                                </td>

                                <td>
                                    <button className=" text-black disabled:opacity-100 uppercase" disabled>{item.status}</button>

                                </td>
                                <td>
                                    <p><small>{item.feedback}</small></p>

                                </td>
                                <td>
                                    <Link to={`/dashboard/updatedAClass/${item._id}`}>
                                        <button className="btn btn-ghost btn-md bg-green-600 text-white" ><small>Updated</small></button></Link>
                                </td>

                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default InstructorMyClass;