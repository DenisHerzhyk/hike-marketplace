import React from "react";
import ButtonType from "./ButtonType.ts";

const Button: React.FC<ButtonType> = ({text, bgColor, color, type, onClick, border}) => {
    return (
        <>
            <button type={type} style={{backgroundColor: bgColor, color: color, border: border}} className='bg-white text-black sm:text-md xl:text-xl font-bold rounded-full px-8 py-3 xl:px-[var(--primary-button-px)] xl:py-[var(--primary-button-py)]' onClick={onClick}>{text}</button>
        </>
    )
}

export default Button;