import React from "react";
import logo from '../../../assets/images/logo.svg';
import { IoIosArrowForward } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane, FaLinkedin, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container flex flex-row justify-start gap-7 bg-white lg:justify-between text-black sm:px-[var(--padding-primary)] px-[var(--padding-secondary)] py-44 flex-wrap" id="contact">
                <div className="footer-left flex flex-col gap-3">
                    <h3 className="footer__title tracking-widest font-bold text-xl">Contact</h3>
                    <p className="footer__title tracking-widest text-md">
                        Got a project? Let’s chat...
                    </p>
                    <div className="left-contact flex flex-col gap-2 text-2xl">
                        <p className="contact__number font-bold">+359 877 823 878</p>
                        <p className="contact__email font-bold text-lg xl:text-2xl">denis.herzhyk@gmail.com</p>
                    </div>
                    <p className="footer__policy text-md">Privacy Policy</p>
                </div>

                <div className="footer-center">
                    <div className="flex flex-col center-content gap-3 mb-10">
                        <h3 className="footer__title tracking-widest text-md">University</h3>
                        <p className="footer__address font-bold text-lg max-w-xs">
                            Ruse University, Ruse, Bulgaria
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 center-social">
                        <h3 className="footer__title tracking-widest text-md">Follow me</h3>
                        <div className="center-social__icons flex flex-row text-2xl gap-3">
                            <a href="https://t.me/den_progr"><FaTelegramPlane/></a>
                            <a href="https://www.instagram.com/denger_it/"><IoLogoInstagram/></a>
                            <a href="https://www.linkedin.com/in/denys-herzhyk-03280a274/"><FaLinkedin/></a>
                        </div>
                    </div>
                </div>

                <div className="footer-right flex flex-col gap-3">
                    <a href="#"><img src={logo} alt="logo" className="footer__logo w-[50px]" /></a>
                    <h3 className="footer__title tracking-widest text-md">Subscribe to our newsletter</h3>
                    <div className="right-email">
                        <input 
                            type="email" 
                            placeholder="example@gmail.com" 
                            className="footer__email w-full text-lg pl-5 py-4 border-2 border-black" 
                        />
                    </div>
                    <div className="right-submit flex flex-col gap-4 max-w-lg">
                        <p className="footer-description text-sm tracking-widest">
                            By clicking the Submit button below, you are agreeing to receive 
                            email marketing communications from think3 from time to time.
                        </p>
                        <div className="submit-button flex flex-row items-center text-xl">
                            <a type="button" href="#" className="footer-button pr-5 py-2 font-medium flex flex-row justify-center cursor-auto items-center gap-3">Submit <IoIosArrowForward /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;