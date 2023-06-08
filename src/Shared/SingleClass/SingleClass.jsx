import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SingleClass = ({ cla }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const { picture, title, instructorName, availableSeat, students } = cla;
    const handleAddToCart = item => {
        console.log('item', item)
        if (user) {
            fetch('http://localhost:5000/carts',{
                
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
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
                <button onClick={() => handleAddToCart(cla)} className="rounded-full btn btn-outline bg-slate-200 text-[#BB8506] border-0 border-b-4 mt-4 hover:text-[#BB8506]">Selected The Course</button>
            </div>
        </div>
    );
};

export default SingleClass;