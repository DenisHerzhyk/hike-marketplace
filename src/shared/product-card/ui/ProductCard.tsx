import React from "react";
import ProductType from "./ProductType";
import { Link } from "react-router-dom";
import ProductCardType from "./ProductCardType";

const ProductCard: React.FC<ProductCardType> = ({ setCart, cart, product}) => {
    const addToCart = () => {
        const alreadyInCart = cart.some(item => item.id === product.id)
        if (!alreadyInCart) {
            setCart(prev => [...prev, product])
        }
        else {
            console.log(`already in cart product-${product.id} with title ${product.title}`)
        }
    }
    return (
        <div className="ProductCart relative w-[var(--w-products-map)] group">
            <div className="new__product absolute top-0 left-0 bg-black z-10 text-white px-2 py-1 text-xs">NEW</div>
            <div className="image__card relative">
                <img src={product.image} alt={product.title} className="h-[var(--h-products-map)] mb-7 object-cover object-center" />
                <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 bg-black font-bold text-white px-7 py-4 rounded-full z-20" onClick={addToCart}>Add to Cart</button>
            </div>
            <h2 className="text-base font-medium mb-2"><Link to="/">{product.title}</Link></h2>
            <p className="text-sm">${product.price}</p>
        </div>
    );
};

export default ProductCard;
