import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";

import { useContext, useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";



const AddClass = () => {
    const { user } = useContext(AuthContext);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    // automatically sent data
    useEffect(() => {
        setValue('instructorName', user?.displayName); // Set initial value when "user.displayName" changes
    }, [setValue, user?.displayName]);
    useEffect(() => {
        setValue('postedBy', user?.email); // Set initial value when "user.email" changes
    }, [setValue, user?.email]);

    const onSubmit = (data) => {
        

        fetch("http://localhost:5000/addClass", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            }))
        console.log(data);
    }
    return (
        <div className="">
            <Helmet>
                <title>United Sports | Add A Class</title>

            </Helmet>
            <h1 className="text-center font-semibold text-5xl mb-5">Add A New Class!!</h1>
            <div className="my-container w-full min-h-screen flex flex-col lg:flex-row items-start">
                <div className="lg:w-full h-full flex flex-col p-10 lg:p-10 justify-between">
                    <div className=" p-10 bg-gradient-to-br from-purple-300 to-indigo-200 rounded-lg">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {errors.exampleRequired && <span>This field is required</span>}
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <input
                                    className="text-input p-5 h-10 text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2"
                                    {...register("picture")}
                                    placeholder="Sports Class image link"
                                    type="url"
                                // defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
                                />
                                <input
                                    className="text-input p-5 h-10 text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2"
                                    {...register("title")}
                                    placeholder="Sports Class Name"
                                // defaultValue="Car Toy"
                                />
                                <input
                                    className="text-input p-5 h-10 text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2"
                                    value={user?.displayName}
                                    {...register("instructorName")}
                                    placeholder="your Name"
                                    type="name"
                                />
                                <input
                                    className="text-input p-5 h-10 text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2"
                                    value={user?.email}
                                    {...register("postedBy")}
                                    placeholder="your email"
                                    type="email"
                                />


                            
                                <input
                                    className="text-input p-5 h-10 text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2"
                                    {...register("Price", { required: true })}
                                    placeholder="Price"
                                // defaultValue="5k"
                                />
                                <input
                                    className="text-input p-5 h-10 text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2"
                                    {...register("availableSeat", { required: true })}
                                    placeholder="Available Seat"
                                    type="text"
                                // defaultValue="3.5"
                                />
                                <input
                                    className="text-input p-5 h-10 text-black rounded-lg border-2 border-indigo-400 mb-2 mr-2"
                                    {...register("students")}
                                    placeholder="Students"
                                    type="text"
                                    defaultValue="0"
                                    disabled
                                    
                                />

                          


                            </div>
                      
                            <div className="text-center mb-2">
                                <input className="btn btn-outline btn-secondary" value="Post A Class" type="submit" />
                            </div>

                        </form>
                    </div>
                </div>
       
            </div>

        </div>
    );
};

export default AddClass;