import React from "react";
import logo from '../../../assets/images/logo.svg';
import HikesSectionType from "./HikesSectionType";
import Button from "../../button/ui/Button";

const HikesSection: React.FC<HikesSectionType> = ({video, header}) => {
    return (
        <>
            <div className="HikesSection w-screen flex-1 sm:px-[var(--padding-primary)] px-[var(--padding-secondary)] min-w-[300px] h-[var(--h-section-default)] relative flex flex-col justify-center">
                <div className="content z-20 relative flex flex-col items-center text-white">
                    <img src={logo} alt="logo" className="logo mb-4" />
                    <p className="text-xl mb-4">DIVE INTO PARADISE</p>
                    <h1 className="font-extrabold text-2xl xl:text-3xl leading-normal whitespace-pre-line mb-6 text-center">{header}</h1>
                    <Button text="VIEW AVAILABLE HIKES" bgColor="white" color="black" type="button"/>
                </div>
                <video
                    className="absolute top-0 left-0 w-full h-full z-10 object-cover bg-center object-bottom"
                    autoPlay
                    loop
                    muted
                    playsInline>
                    
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                
            </div>
        </>
    )
}

export default HikesSection;