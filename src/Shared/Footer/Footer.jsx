import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from '../../assets/logo/unitedlogo.jpg'

const Footer = () => {
    return (
        <footer >
            <div className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='h-[50px] w-[50px]' src={logo} alt="" />
                    <p>United Sports Academy.<br />Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Voluptates fugiat labore <br /> quaerat in aliquid ipsam fuga corporis et dolores veniam.</p>
                    
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Social Media</span>
                    <a className="link link-hover"><FaFacebook className='h-[20px] w-[60px]' /></a>
                    <a className="link link-hover"><FaInstagram className='h-[20px] w-[60px]' /></a>
                    <a className="link link-hover"><FaTwitter className='h-[20px] w-[60px]' /></a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className=" footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by United Sports Company Ltd</p>
                </div>
            </div>
         
        </footer>
    );
};

export default Footer;