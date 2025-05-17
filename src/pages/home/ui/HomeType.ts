import ProductType from "../../../shared/product-card/ui/ProductType";

type HomeType = {
    cart: ProductType[],
    setCart: React.Dispatch<React.SetStateAction<ProductType[]>>
}

export default HomeType;