import { Link } from "react-router-dom";
import logo from '../../assets/logo/unitedlogo.jpg'
const Navbar = () => {
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>

        <li>
            <Link to="/dashboard/mycart">
                <button className="btn gap-2">

                </button>
            </Link>
        </li>

        {/* {
        user ? <>
            <span>{user?.displayName}</span>
            <button onClick={handleLogOut} className="btn btn-active btn-ghost">LogOut</button>
        </> :
            <>
                <li><Link to='/login'>login</Link></li>
                <li><Link to='/signup'>SignUp</Link></li>

            </>
    } */}

    </>
    return (
        < >
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link
                        to='/'
                        aria-label='HouseOfToyCars'
                        title='HouseOfToyCars'
                        className='inline-flex items-center'
                    >
                        <div className='flex items-center justify-center w-12 h-12 rounded-full'>
                            <img src={logo} alt="" />
                        </div>
                        <span className='ml-2 text-xl font-bold tracking-wide bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text '>
                            United Sports <br /> Academy
                        </span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div> */}
            </div>
        </>
    );
};

export default Navbar;