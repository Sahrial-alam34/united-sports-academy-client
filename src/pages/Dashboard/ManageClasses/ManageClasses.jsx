import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import usePendingClasses from "../../../hooks/usePendingClasses";

import { Link } from "react-router-dom";



const ManageClasses = () => {
    const [pendingClasses, refetch] = usePendingClasses();
    //console.log('7 pendingClasses', pendingClasses);
    //const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleApproved = item => {
        const status = { status: "approved" };
        //console.log('roleadmin', role)
        //setIsButtonDisabled(true);


        fetch(`http://localhost:5000/addClass/admin/${item._id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(status)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${item.instructorName} post is Approved!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDenied = item => {
        const status = { status: "denied" };
        //console.log('roleadmin', role)
        //setIsButtonDisabled(true);


        fetch(`http://localhost:5000/addClass/admin/${item._id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(status)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${item.instructorName} post is Approved!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    // const handleDelete = item => {
    //     // console.log(item);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`http://localhost:5000/addClass/${item._id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     if (data.deletedCount > 0) {
    //                         refetch();
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'Your Class has been deleted.',
    //                             'success'
    //                         )
    //                     }
    //                 })
    //         }
    //     })
    // }
    return (
        <div>
            <Helmet>
                <title>United Sports | Manage Classes</title>

            </Helmet>
            <div className="font-bold flex justify-evenly gap-10 items-center h-[60px]">
                <h3 className="text-3xl">Manage Classes By Admin</h3>


            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full bg-gray-300">
                    {/* head */}
                    <thead>
                        <tr className="bg-purple-500 text-white">
                            <th> # </th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Price</th>
                            <th>Students</th>
                            <th>Available Seat</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            pendingClasses.map((item, index) => <tr key={item._id}>
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
                                {
                                    item.status === 'approved' || item.status === 'denied' ?
                                        <td className="flex gap-2">

                                            <button onClick={() => handleApproved(item)} className="btn btn-ghost btn-md bg-green-600 text-white" disabled><small>Approved</small></button>
                                            <button onClick={() => handleDenied(item)} className="btn btn-ghost btn-md bg-red-600 text-white" disabled ><small>Denied</small></button>
                                            <Link to={`/dashboard/adminFeedback/${item._id}`}>
                                                <button className="btn btn-ghost btn-md bg-yellow-600 text-white"><small>Feedback</small></button>
                                            </Link>
                                            {/* <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-md bg-red-600 text-white"><small>Delete</small></button> */}
                                        </td>
                                        :
                                        <td className="flex gap-2">

                                            <button onClick={() => handleApproved(item)} className="btn btn-ghost btn-md bg-green-600 text-white" ><small>Approved</small></button>
                                            <button onClick={() => handleDenied(item)} className="btn btn-ghost btn-md bg-red-600 text-white" ><small>Denied</small></button>
                                            <Link to={`/dashboard/adminFeedback/${item._id}`}>
                                                <button className="btn btn-ghost btn-md bg-yellow-600 text-white"><small>Feedback</small></button>
                                            </Link>
                                            {/* <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-md bg-red-600 text-white"><small>Delete</small></button> */}
                                        </td>

                                }
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClasses;