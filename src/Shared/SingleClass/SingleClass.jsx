import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const SingleClass = ({ cla }) => {
    const { user, role } = useContext(AuthContext);

    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const { picture, title, instructorName, availableSeat, students, _id, Price } = cla;
    const handleAddToCart = item => {
        console.log('item', item)
        if (user && user.email) {
            const cartItem = { classId: _id, title, instructorName, availableSeat, students, picture, Price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); //it can update cart item
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl cursor-pointer group ">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl h-[250px] w-[390px] group-hover:scale-150 transition" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className="font-bold">Instructor Name: {instructorName}</p>
                <div className="flex gap-8">
                    <p>Seats Available: {availableSeat}</p>
                    <p>Total Students:{students}</p>
                </div>
                {
                    role === 'admin' ? (<>

                        <button onClick={() => handleAddToCart(cla)} className="rounded-full btn btn-outline bg-slate-200 text-[#BB8506] border-0 border-b-4 mt-4 hover:text-[#BB8506]" disabled>Selected The Course</button>
                    </>)
                        :
                        role === 'instructor' ? (<>

                            <button onClick={() => handleAddToCart(cla)} className="rounded-full btn btn-outline bg-slate-200 text-[#BB8506] border-0 border-b-4 mt-4 hover:text-[#BB8506]" disabled>Selected The Course</button>



                        </>)
                            :
                            (<>
                                <button onClick={() => handleAddToCart(cla)} className="rounded-full btn btn-outline bg-slate-200 text-[#BB8506] border-0 border-b-4 mt-4 hover:text-[#BB8506]">Selected The Course</button>

                            </>)
                }


            </div>
        </div>
    );
};

export default SingleClass;