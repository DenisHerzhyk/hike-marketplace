import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import CatalogCardType from "./CatalogCardType";
import Overlay from "../../overlay/ui/Overlay";

const CatalogCard:React.FC<CatalogCardType> = ({img, title}) => {
    return (
        <>
            <div className="CatalogCard truncate rounded-xl relative flex-1 h-[var(--h-catalog-card)] min-w-[var(--w-catalog-card)] bg-cover bg-center bg-no-repeat flex-shrink-0" style={{backgroundImage: `url(${img})`}}>
                <a href="" className="text-white bg-black py-1 px-3 z-20 absolute bottom-4 left-0 flex flex-row items-center">{title} <IoIosArrowForward className="ml-2"/></a>
                <Overlay />
            </div>
        </>
    )
}

export default CatalogCard;