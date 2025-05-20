import React from "react";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import ProductCardType from "./ProductCardType";
import {useState} from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const MiniProductCard: React.FC<ProductCardType> = ({ cart, product, setCart}) => {
    const [quantity, setQuantity] = useState(1);
    const deleteFromCart = () => {
        if (cart.length > 0 && cart.some(item => item.id === product.id)) {
            setCart(prev => prev.filter(item => item.id !== product.id))
        }
        else {
            console.log(`product-${product.id} not in cart`)
        }
    }

    const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let newQuantity = parseInt(e.target.value);
        setQuantity(newQuantity);

        setCart(prev => 
            prev.map(item => item.id === product.id 
            ? { ...item, quantity: newQuantity } 
            : item
        ))
    }

    return (
        <div className="MiniProductCart relative border border-gray-300 rounded-sm p-3 flex flex-col h-full group text-black">
            <img 
                src={product.image} 
                alt={product.title} 
                className="h-full w-full mb-3 object-contain object-center" 
            />           
            <div className="flex-grow">
                <h2 className="text-sm font-medium mb-3">
                    <Link to="/">{product.title}</Link>
                </h2>
            </div>
            <div className="details__panel flex justify-between items-center">
                <p className="text-sm font-semibold">${product.price}</p>
                <div className="options flex flex-row gap-3 items-center">
                    <select 
                    value={quantity}
                    onChange={handleQuantityChange}
                    name="" id="" className="border border-gray-300 rounded text-sm p-1 w-10">
                        {numbers.map(num => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </select>
                    <button 
                        className="text-xl text-black hover:text-red-500 transition-colors" 
                        onClick={deleteFromCart}
                    >
                        <IoTrashOutline />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MiniProductCard;
