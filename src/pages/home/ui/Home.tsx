import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import HomeType from './HomeType.ts';
import ShopPromotion from '../../../shared/shop-promotion-section/ui/ShopPromotion.tsx';
import CatalogCard from '../../../shared/catalog-card/ui/CatalogCard.tsx';
import FreedomBenefits from '../../../shared/freedom-benefits/ui/FreedomBenefits.tsx';
import Overlay from '../../../shared/overlay/ui/Overlay.tsx';
import HikesSection from '../../../shared/hikes-section/ui/HikesSection.tsx';
import Button from '../../../shared/button/ui/Button.tsx';
import {useState, useEffect} from "react";
import ProductType from '../../../shared/product-card/ui/ProductType.ts';
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import ProductCard from '../../../shared/product-card/ui/ProductCard.tsx';
//images
import hike from "../../../assets/images/hike.svg";
import ps1 from "../../../assets/images/shop-promotion.jpg";
import mensCatalog from "../../../assets/images/m-slide.jpg";
import womensCatalog from "../../../assets/images/w-slide.webp";
import bootsCatalog from "../../../assets/images/b-slide.jpg";
//videos
import walkVideo from "../../../assets/videos/hike-walk.mp4";

const Home: React.FC<HomeType> = ({cart, setCart}) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        addProductToCart()
        .then(data => {
            setProducts(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        })
    }, [])

    const addProductToCart = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            if (response.status != 200) {
                throw new Error('Failed to fetch data');
            }
            return response.data;
        }
        catch (error) {
            throw new Error('Failed to fetch data');
        }
    }
    return (
        <>
        <div className="Home">
            <div className="w-screen h-screen relative flex flex-col flex-wrap justify-center text-white sm:px-[var(--padding-primary)] px-[var(--padding-secondary)] bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${hike})`}}>
                <div className="content z-20">
                    <h1 className="font-extrabold text-3xl lg:text-3xl xl:text-6xl mb-4">30-60% OFF<br/>MID SEASON SALE<br/>FOR MEMBERS</h1>
                    <h3 className="sm:text-2xl text-lg xl:text-xl font-bold mb-3">EMBRACE THE ELEMENTS</h3>
                    <p className="xltext-base font-medium mb-6 leading-5">FOR THE MOUNTAIN, THE RAIN,<br/>& EVERYTHING IN BETWEEN</p>
                    <Button text="SHOP ME" bgColor="white" color="black" type="button"/>
                    <a href="#target" className="go__down__block absolute bottom-0 transform -translate-x-1/2 left-1/2 text-xs text-white bg-black w-auto flex flex-col justify-center items-center p-2 cursor-pointer">SHOW NOW <IoIosArrowDown className="text-base"/></a>
                </div>
                <Overlay />
            </div>
            <div className='ProductsMap flex flex-row justify-between items-center sm:px-[var(--padding-primary)] px-[var(--padding-secondary)] py-[130px]' id="target">
                <div className="text__context">
                    <h1 className="text-2xl font-extrabold">HIKING PANTS</h1>
                    <p className="text-lg mb-3">BUILD TO HANDLE EVERYTHING</p>
                    <a href="" className="text-sm flex flex-row items-center gap-1">SHOP ALL <IoIosArrowForward /></a>
                </div>
                <div className='cards overflow-x-auto flex flex-row gap-14 ml-20'>
                    {products && products.map((product) => (
                        <div key={product.id} className="flex-shrink-0">
                            <ProductCard key={product.id} cart={cart} setCart={setCart} product={product}/>
                        </div>
                    ))}
                </div>
            </div>
            <ShopPromotion
                p1="WELCOME IN"
                header="BIGGEST HIKE SHOP"
                p2="HANG FIVE, HANG OUT"
                img={ps1}
            />
            <div className='ProductsMap flex flex-row justify-between items-center sm:px-[var(--padding-primary)] px-[var(--padding-secondary)] py-[130px]'>
                <div className="text__context">
                    <h1 className="text-2xl font-extrabold">HIKING BOOTS</h1>
                    <p className="text-lg mb-3">OVERCOME ANY OBSTACLE</p>
                    <a href="" className="text-sm flex flex-row items-center gap-1">SHOP ALL <IoIosArrowForward /></a>
                </div>
                <div className='cards overflow-x-auto flex flex-row gap-14 ml-20'>
                    {products && products.map((product) => (
                        <div key={product.id} className="flex-shrink-0">
                            <ProductCard key={product.id} cart={cart} setCart={setCart} product={product}/>
                        </div>
                    ))}
                </div>
            </div>
            <HikesSection 
                video={walkVideo}
                header={
                <>
                    EXPERIENCE THE MOST<br/>BEAUTIFUL VIEWS WITH US
                </>
                }
            />
            <div className='ProductsMap flex flex-row justify-between items-center sm:px-[var(--padding-primary)] px-[var(--padding-secondary)] py-[130px]'>
                <div className="text__context">
                    <h1 className="text-2xl font-extrabold">HIKING BOOTS</h1>
                    <p className="text-lg mb-3">OVERCOME ANY OBSTACLE</p>
                    <a href="" className="text-sm flex flex-row items-center gap-1">SHOP ALL <IoIosArrowForward /></a>
                </div>
                <div className='cards overflow-x-auto flex flex-row gap-14 ml-20'>
                    {products && products.map((product) => (
                        <div key={product.id} className="flex-shrink-0">
                            <ProductCard key={product.id} cart={cart} setCart={setCart} product={product}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-row w-full overflow-x-auto gap-5 sm:px-[var(--padding-primary)] px-[var(--padding-secondary)]">
                <CatalogCard 
                    img={mensCatalog}
                    title="CHECK FOR MENS WEAR"
                />
                <CatalogCard 
                    img={womensCatalog}
                    title="CHECK FOR WOMENS WEAR"
                />
                <CatalogCard 
                    img={bootsCatalog}
                    title="CHECK FOR BOOTS"
                />
            </div>
            <FreedomBenefits />
        </div>
        </>
    )
}

export default Home;