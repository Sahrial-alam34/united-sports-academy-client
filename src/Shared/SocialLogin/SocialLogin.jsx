
import { useContext } from 'react';
import googleIcon from '../../assets/google/icons8-google.svg'
import { AuthContext } from '../../providers/AuthProvider';
const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();

    // const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                // const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                // fetch('https://bistro-boss-server-beryl-kappa.vercel.app/users', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(saveUser)
                // })
                //     .then(res => res.json())
                //     .then(() => {
                //         navigate(from, { replace: true });
                //     })
            })
    }

    return (
        <>
        <button  onClick={handleGoogleSignIn}  className='w-full bg-white font-semibold my-2 text-[#060606] border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
            <img src={googleIcon} className='h-6 mr-2' alt="" />
            Sign In With Google </button>
    </>
    );
};

export default SocialLogin;