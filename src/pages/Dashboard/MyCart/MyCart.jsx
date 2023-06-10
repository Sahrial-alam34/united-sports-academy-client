import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart, refetch] = useCart();
    // console.log('7 cart', cart);
    //const total = cart.reduce((sum, item) => item.Price + sum, 0);
    const handleDelete = item => {
        // console.log(item);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div>
            <Helmet>
                <title>United Sports | My Cart</title>

            </Helmet>
            <div className="font-bold flex justify-evenly gap-10 items-center h-[60px]">
                <h3 className="text-3xl">Total Classes Booked: {cart.length}</h3>
                {/* <h3 className="text-3xl">Total Price: ${total}</h3> */}

            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full bg-gray-300">
                    {/* head */}
                    <thead>
                        <tr className="bg-purple-500 text-white">
                            <th> # </th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Students</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item, index) => <tr key={item._id}>
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
                                <td className="text-end">${item.Price}</td>
                                <td className="text-center">
                                    {item.students}
                                </td>

                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-md bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td>
                                    <Link to={`/dashboard/payment/${item._id}`}>
                                        <button className="rounded-full btn btn-outline bg-purple-500 text-white border-0 border-b-4  hover:text-[#BB8506]">Pay Now</button>
                                    </Link>
                                </td>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyCart;