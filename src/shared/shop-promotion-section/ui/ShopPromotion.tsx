import React from "react";
import ShopPromotionType from "./ShopPromotionType";
import Overlay from "../../overlay/ui/Overlay";
import Button from "../../button/ui/Button";


const ShopPromotion: React.FC<ShopPromotionType> = ({p1, header, p2, img}) => {
    return (
        <>
            <div className="ShopPromotion relative sm:px-[var(--padding-primary)] px-[var(--padding-secondary)] flex flex-col justify-center h-[var(--h-section-default)]" 
            style={{backgroundImage: `url(${img})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="content z-20 text-white">
                    <p className="font-medium text-xl mb-3">{p1}</p>
                    <h1 className="font-extrabold text-5xl mb-3">{header}</h1>
                    <p className="font-medium text-xl mb-5">{p2}</p>
                    <Button text="SHOP NOW" bgColor="white" color="black" type="button"/>
                </div>      
                <Overlay />
            </div>
        </>
    )
}

export default ShopPromotion;