import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import registerImg from '../../assets/register/register.jpg'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { useContext, useState } from 'react';
import './Register.css'
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const [type, setType] = useState("password")

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, logOut } = useContext(AuthContext)
    const navigate = useNavigate();
    const onSubmit = data => {
        //console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                            fetch('https://assignment12-united-sports-academy-server-sahrial-alam34.vercel.app/users',{
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(saveUser)
                            })
                            .then(res => res.json())
                            .then(data=>{
                                if(data.insertedId){
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    logOut()
                                    .then(()=>{
                                        navigate('/login')
                                    })
                                }
                            })
                      
                        

                    })
                    .catch(error => console.log(error))
            })


    };

    return (
        <>
            <Helmet>
                <title>United Sports | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-300 shadow-xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={registerImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                {/* <label htmlFor='image' className='block mb-2 text-sm'>
                                    Select Image:
                                </label>
                                <input type="file"  {...register("photoURL", { required: true })} placeholder="Photo URL" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>} */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type={type} {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                })} placeholder="password" className="input input-bordered w-full " />



                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase, one number and one special character.</p>}
                                <span className='password-toggle-icon'>
                                    {
                                        type === 'password' ? (
                                            <span className='icon-span'
                                                onClick={() => setType('text')}
                                            ><AiFillEye></AiFillEye></span>
                                        ) :
                                            (
                                                <span className='icon-span'
                                                    onClick={() => setType('password')}
                                                ><AiFillEyeInvisible></AiFillEyeInvisible></span>
                                            )
                                    }
                                </span>

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <div className='relative'>
                                    <input type={type} {...register("confirmPassword", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                                    })} placeholder="confirm password" className="input input-bordered w-full " />
                                    {errors.confirmPassword?.type === 'required' && <p className="text-red-600">Confirm Password is required</p>}

                                    {errors.confirmPassword !== errors.password && <p className="text-red-600">Password does not match</p>}
                                    <span className='forget-password-toggle-icon'>
                                        {
                                            type === 'password' ? (
                                                <span className='icon-span'
                                                    onClick={() => setType('text')}
                                                ><AiFillEye></AiFillEye></span>
                                            ) :
                                                (
                                                    <span className='icon-span'
                                                        onClick={() => setType('password')}
                                                    ><AiFillEyeInvisible></AiFillEyeInvisible></span>
                                                )
                                        }
                                    </span>

                                </div>

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div className="form-control mt-3">
                                <button className='w-full text-white font-semibold my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>Register </button>
                            </div>
                        </form>
                        <p className='mx-auto'><small>Already have an account? <Link to="/login">Login</Link></small></p>
                        <div className='w-80 mx-auto my-2'>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;