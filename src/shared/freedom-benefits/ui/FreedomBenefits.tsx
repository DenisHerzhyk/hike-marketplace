import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import Button from "../../button/ui/Button";

const FreedomBenefits = () => {
    return (
        <>
            <div className="FreedomBenefits mt-24 relative bg-[#EFEFEF] w-full flex flex-row lg:flex-nowrap flex-wrap gap-20 justify-between items-center sm:px-[var(--padding-primary)] px-[var(--padding-secondary)] py-16">
                <div className="follow__section">
                    <h1 className="font-bold text-4xl mb-5">FREEDOM BENEFITS</h1>
                    <p className="text-lg mb-7">The adventure starts here. Join the club and reap the rewards</p>
                    <Button text="SIGN UP" bgColor="black" color="white" type="button"/>
                </div>
                <div className="benefits__section flex flex-row flex-wrap justify-between pl-0.5 gap-16">
                    <div className="benefits__delivery">
                        <CiDeliveryTruck className="text-7xl mb-3"/>
                        <h2 className="text-xl font-semibold">FREE SHIPPING</h2>
                        <p className="text-base">Enjoy free shipping on all orders</p>
                    </div>
                    <div className="benefits__offer">
                        <CiDiscount1 className="text-7xl mb-3"/>
                        <h2 className="text-xl font-semibold">EXCLUSIVE OFFERS</h2>
                        <p className="text-base">Members-only promos, experiences and offers</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreedomBenefits;