import React from 'react';
import logo from '../../../assets/images/logo.svg';
import Button from "../../../shared/button/ui/Button";
import ShopPromotion from '../../../shared/shop-promotion-section/ui/ShopPromotion.tsx';
import promBg from "../../../assets/images/register-promotion-bg.svg";
import Overlay from '../../../shared/overlay/ui/Overlay.tsx';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <>
            <div className="Register">
                <div className="content w-screen h-screen flex flex-col justify-center items-center text-white sm:px-[var(--padding-primary)] px-[var(--padding-secondary)] mt-[70px]">
                    <div className="content__container border border-gray-200 rounded-sm shadow-lg shadow-gray-500/50 flex flex-col justify-center items-center p-12">
                        <a href="" className="mb-5"><img src={logo} alt="logo" className="logo" /></a>
                        <h1 className="text-black font-bold text-2xl mb-10" style={{ textShadow: '1px 1px 2px rgba(0, 206, 250, 0.5)' }}>REGISTER</h1>
                        <form action="" className="text-black flex flex-col gap-8 w-[var(--w-login-form)] justify-center">
                            <div className="email__box flex flex-col gap-1">
                                <label htmlFor="email" className="text-gray-500 text-sm">Email</label>
                                <input type="email" id="email" placeholder="Enter email" className="w-full text-md px-4 py-3 border border-gray-300"/>
                            </div>
                            <div className="password__box flex flex-col gap-1">
                                <label htmlFor="password" className="text-gray-500 text-sm">Password</label>
                                <input type="password" id="password" placeholder="Enter password" className="w-full text-sm px-4 py-3 border border-gray-300"/>
                            </div>
                            <div className="confirm_password__box flex flex-col gap-1">
                                <label htmlFor="confirm_password" className="text-gray-500 text-sm">Confirm password</label>
                                <input type="password" id="confirm_password" placeholder="Enter password" className="w-full text-sm px-4 py-3 border border-gray-300"/>
                            </div>
                            <Button text="REGISTER" bgColor="black" color="white" type="submit"/>
                            <p className="text-gray-400 text-center text-sm">Already have an account? <Link to="/login" className="underline text-black">Sign In</Link></p>
                        </form>
                    </div>
                </div>
                <div className="promo-block relative">
                    <ShopPromotion
                    p1="DON'T MISS OUR SPECIAL OFFERS"
                    header="30-60% OFF MID SEASON SALE FOR MEMBERS"
                    p2="CHECK FOR DISCOUNTS"
                    img={promBg}
                    />
                    <Overlay />
                </div>                
            </div>
        </>
    )
}

export default Register;