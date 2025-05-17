import React from "react";
import CartType from "./CartType";
import MiniProductCard from "../../../shared/product-card/ui/MiniProductCard";

const Cart: React.FC<CartType> = ({cart, setCart}) => {
    return (
        <>
            <div className="Cart">
                <div className="content w-screen h-screen overflow-y-auto flex flex-col flex-wrap items-center text-black sm:px-[var(--padding-primary)] px-[var(--padding-secondary)] pt-[200px] pb-[100px]">
                    {cart && cart.length > 0 ? 
                    <div>
                        <h1 className="text-2xl font-bold mb-5 border-b border-gray-200 border-b-1 w-full">YOUR CART</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-16 w-full">
                            {cart.map((product) => (
                                <MiniProductCard
                                key={product.id}
                                cart={cart}
                                setCart={setCart}
                                product={product}
                                />))
                            }
                        </div>
                    </div>
                     : 
                    <div>
                        <p className="text-center text-black text-3xl font-bold">CART IS EMPTY</p>
                    </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Cart;