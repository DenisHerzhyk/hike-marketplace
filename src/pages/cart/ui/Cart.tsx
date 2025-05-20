import React, { use } from "react";
import CartType from "./CartType";
import MiniProductCard from "../../../shared/product-card/ui/MiniProductCard";
import { FaApple } from "react-icons/fa";
import Button from "../../../shared/button/ui/Button";
import {useState, useEffect} from "react";

const Cart: React.FC<CartType> = ({setCart, cart}) => {
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);
    
    useEffect(() => {
        const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 1);
        const quantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

        setAmount(quantity);
        setTotal(total);
    }, [cart])
    
    return (
        <>
            <div className="Cart flex flex-col lg:flex-row w-screen min-h-screen pt-[200px] pb-[100px] sm:px-[var(--padding-primary)] px-[var(--padding-secondary)] text-black">
                <div className="flex-[1.3] overflow-y-auto pr-8">
                    {cart && cart.length > 0 ? (
                        <>
                            <h1 className="text-2xl font-bold mb-5 border-b border-gray-200 border-b-1 w-full">YOUR CART</h1>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
                                {cart.map((product) => (
                                    <MiniProductCard
                                        key={product.id}
                                        cart={cart}
                                        setCart={setCart}
                                        product={product}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <p className="text-center text-3xl font-bold">CART IS EMPTY</p>
                    )}
                </div>
                <div className="flex-[0.7] bg-gray-100 rounded-xl px-6 py-20 shadow-lg h-fit justify-center flex flex-col max-w-[420px]">
                    <h1 className="text-xl font-bold mb-4">ORDER SUMMARY</h1>
                    <div className="subtotal flex justify-between mb-2">
                        <p>SUBTOTAL ({amount})</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                    <div className="delivery flex justify-between mb-2 text-sm">
                        <p>ESTIMATED SHIPPING<br /><span className="text-xs">(FREE OVER $100)</span></p>
                        <p>FREE</p>
                    </div>
                    <div className="checkout__total border-t border-gray-300 pt-4 mt-4">
                        <div className="flex justify-between font-bold text-lg mb-4">
                            <p>ESTIMATED TOTAL</p>
                            <p>${total.toFixed(2)}</p>
                        </div>
                        <div className="buttons flex flex-col gap-2">
                            <Button text="CHECKOUT" bgColor="white" color="black" type="button" border="1px solid black" />
                            <Button 
                                text={
                                    <span className="flex items-center justify-center gap-2">
                                        <FaApple />
                                        PAY
                                    </span>
                                } 
                                bgColor="black" color="white" type="button" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;
