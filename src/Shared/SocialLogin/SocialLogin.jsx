
import googleIcon from '../../assets/google/icons8-google.svg'
const SocialLogin = () => {
    return (
        <>
        <button  className='w-full bg-white font-semibold my-2 text-[#060606] border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
            <img src={googleIcon} className='h-6 mr-2' alt="" />
            Sign In With Google </button>
    </>
    );
};

export default SocialLogin;