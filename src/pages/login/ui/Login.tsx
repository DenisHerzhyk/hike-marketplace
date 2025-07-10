import React from 'react';
import logo from '../../../assets/images/logo.svg';
import Button from "../../../shared/button/ui/Button";
import ShopPromotion from '../../../shared/shop-promotion-section/ui/ShopPromotion.tsx';
import promBg from "../../../assets/images/login-promotion-bg.svg";
import Overlay from '../../../shared/overlay/ui/Overlay.tsx';
import {Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

const Login: React.FC<{loggedIn: boolean, setLoggedIn: (v: boolean) => void}> = ({loggedIn, setLoggedIn}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [csrfToken, setCsrfToken] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('/api/csrf')
        .then(res => setCsrfToken(res.data.csrfToken))
        .catch(error => console.log(error));
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try
        {   
            const formData = new URLSearchParams();
            formData.append('username', username);
            formData.append('password', password);
            formData.append('_csrf', csrfToken);
            const response = await axios.post('/api/login', formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            if (response.data.success) {
                setLoggedIn(true);
                navigate("/")
                console.log("Login successful!")
            }
        }
        catch(err) {
            setError("Login Failed!");
        }
    }

    if (loggedIn) {
        return <div className="text-green-600 text-center mt-[150px]">User is already logged in!</div>;
    }
    return (
    <>
        <div className="Login">
            <div className="content w-screen h-screen flex flex-col justify-center items-center text-white sm:px-[var(--padding-primary)] px-[var(--padding-secondary)] mt-[70px]">
                <div className="content__container border border-gray-200 rounded-sm shadow-lg shadow-gray-500/50 flex flex-col justify-center items-center p-12">
                    <a href="" className="mb-5"><img src={logo} alt="logo" className="logo" /></a>
                    <h1 className="text-black font-bold text-2xl mb-10" style={{ textShadow: '1px 1px 2px rgba(0, 206, 250, 0.5)' }}>SIGN IN</h1>
                    <form onSubmit={handleSubmit} className="text-black flex flex-col gap-8 w-[var(--w-login-form)] justify-center">
                        <input type="hidden" name="_csrf" value={csrfToken} />
                        {error && <div className="text-red-500 text-sm">{error}</div>}
                        <div className="email__box flex flex-col gap-1">
                            <label htmlFor="email" className="text-gray-500 text-sm">Email</label>
                            <input type="email" value={username} id="email" placeholder="Enter email" className="w-full text-md px-4 py-3 border border-gray-300" onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="password__box flex flex-col gap-1">
                            <label htmlFor="password" className="text-gray-500 text-sm">Password</label>
                            <input type="password" value={password} id="password" placeholder="Enter password" className="w-full text-sm px-4 py-3 border border-gray-300" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <Button text="SIGN IN" bgColor="black" color="white" type="submit"/>
                        <p className="text-gray-400 text-center text-sm">Haven't registered yet? <Link to="/register" className="underline text-black">Sign Up</Link></p>
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

export default Login;