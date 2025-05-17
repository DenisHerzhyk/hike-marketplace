import React from "react";
import ProductType from "./ProductType";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import ProductCardType from "./ProductCardType";

const MiniProductCard: React.FC<ProductCardType> = ({ cart, product, setCart}) => {
    const deleteFromCart = () => {
        if (cart.length > 0 && cart.some(item => item.id === product.id)) {
            setCart(prev => prev.filter(item => item.id !== product.id))
        }
        else {
            console.log(`product-${product.id} not in cart`)
        }
    }
    return (
        <div className="MiniProductCart relative w-[calc(var(--w-products-map)-100px)] group text-black">
            <img src={product.image} alt={product.title} className="h-[calc(var(--h-products-map)-100px)] w-full mb-4 object-cover object-center" />
            <h2 className="text-sm font-medium mb-2"><Link to="/">{product.title}</Link></h2>
            <p className="text-sm">${product.price}</p>
            <button className="absolute top-0 right-0 bg-white border-2 border-black text-3xl text-black cursor-pointer" onClick={deleteFromCart}><IoClose/></button>
        </div>
    );
};

export default MiniProductCard;
