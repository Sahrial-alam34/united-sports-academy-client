import { Parallax } from "react-parallax";
import { NavLink } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
const Cover = ({ img, title, link }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[500px]" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <div className="flex gap-5">
                            <div className="flex ">
                                <div className="uppercase"><NavLink
                                    to='/' className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >Home  </NavLink></div>
                                <span><FaGreaterThan className="m-1"></FaGreaterThan></span>
                            </div>
                            <div className="flex">
                                <div className="uppercase"><NavLink
                                    to={`/${link}`}
                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >{link}</NavLink></div>
                                <span><FaGreaterThan className="m-1"></FaGreaterThan></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;


