import React, {useState} from 'react';
import logo from '../../../assets/images/logo.svg';
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import '../style/scss/Header.scss';

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    return (
        <>  
            <div className="Header absolute top-0 left-0 right-0 z-50">
                <div className='promotion__header bg-gray-200 flex py-1 justify-between items-center px-5'>
                    <Link to="/"><img src={logo} alt="logo" className="logo sm:hidden flex sm:w-auto w-[30px]" /></Link>
                    <Link to="/login" className="text-sm text-gray-500">Login</Link>
                </div>
                <div className="home__header bg-white/80 flex flex-row flex-wrap sm:justify-between justify-center items-center py-3 px-5">
                    <div className="left__panel sm:mb-0 mb-10">
                        <Link to="/"><img src={logo} alt="logo" className="logo w-[40px] sm:flex hidden" /></Link>
                    </div>
                    <div className="central__panel hidden xl:flex justify-center">
                        <nav>
                            <ul className="list-none flex flex-row justify-center items-center gap-20 text-xs font-medium text-black mx-10">
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/mens">MENS</Link></li>
                                <li><Link to="/womens">WOMENS</Link></li>  
                                <li><Link to="/boots">BOOTS</Link></li>
                                <li><Link to="/sale" className="text-green-600 font-bold">SALE</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="right__panel relative flex flex-row flex-wrap justify-between-xs justify-center items-center sm:w-auto w-full sm:gap-6 gap-3">
                        <div className='searchbar relative'>
                            <input
                            type="text"
                            placeholder="Search"
                            className="text-base py-2 px-10 text-black border-2 border-gray-400 rounded-3xl"
                            />
                            <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-500" />
                        </div>
                        <div className="flex flex-row items-center gap-6 text-2xl text-white">
                            <Link to="/wishlist">
                                <FaHeart className="person text-black" />
                            </Link>
                            <Link to="/cart">
                                <FaShoppingCart className="cart text-black" />
                            </Link>
                            <button
                            className="burger_menu xl:hidden flex flex-col justify-center items-center"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                            >
                            <GiHamburgerMenu className="text-3xl text-black cursor-pointer" />
                            </button>
                            {!menuOpen && (
                            <nav id="mobile-menu" className="absolute z-50 top-full right-0 xl:hidden flex w-[100px] bg-white shadow-lg mt-4">
                                <ul className="list-none flex flex-col justify-center items-start w-full gap-5 text-xs font-medium text-black">
                                    <li className="hover:gray-200 cursor-pointer w-full transition duration-300 px-4 py-1 pt-3 flex justify-center items-center"><Link to="/">HOME</Link></li>
                                    <li className="hover:gray-200 cursor-pointer w-full transition duration-300 px-4 py-1 flex justify-center items-center"><Link to="/mens">MENS</Link></li>
                                    <li className="hover:gray-200 cursor-pointer w-full transition duration-300 px-4 py-1 flex justify-center items-center"><Link to="/womens">WOMENS</Link></li>
                                    <li className="hover:gray-200 cursor-pointer w-full transition duration-300 px-4 py-1 flex justify-center items-center"><Link to="/boots">BOOTS</Link></li>
                                    <li className="hover:gray-200 cursor-pointer w-full transition duration-300 px-4 py-1 pb-3 flex justify-center items-center"><Link to="/sale" className="text-green-600 font-bold">SALE</Link></li>
                                </ul>
                            </nav>
                            )}
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Header;