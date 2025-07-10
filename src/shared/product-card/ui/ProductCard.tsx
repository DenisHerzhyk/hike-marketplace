import React from "react";
import { Link } from "react-router-dom";
import ProductCardType from "./ProductCardType";

const ProductCard: React.FC<ProductCardType> = ({ setCart, cart, product }) => {
    const addToCart = () => {
        const alreadyInCart = cart.some(item => item.id === product.id);
        if (!alreadyInCart) {
            setCart(prev => [...prev, product]);
        }
        else {
            console.log(`already in cart product-${product.id} with title: ${product.title}`);
        }
    };

    return (
        <div className="ProductCard border border-gray-100 bg-gray-10 rounded-sm p-3 flex flex-col group text-black w-[350px] h-[520px]">
            <div className="new__product absolute top-0 left-0 bg-black z-10 text-white px-2 py-1 text-xs">NEW</div>            
            <div className="image__container h-[400px] mb-4 relative overflow-hidden">
                <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-center object-contain" 
                />
                <button 
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 bg-black font-bold text-white px-6 py-3 rounded-full z-20 whitespace-nowrap"
                    onClick={addToCart}
                >
                    Add to Cart
                </button>
            </div>            
            <div className="flex flex-col flex-grow justify-between">
                <h2 className="text-lg font-medium mb-2 line-clamp-2">
                    <Link to="/">{product.title}</Link>
                </h2>
                <p className="text-base font-semibold">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;