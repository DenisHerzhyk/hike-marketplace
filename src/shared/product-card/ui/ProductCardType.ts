import ProductType from "./ProductType"

type ProductCardType = {
    cart: ProductType[],
    product: ProductType, 
    setCart: React.Dispatch<React.SetStateAction<ProductType[]>>,
}

export default ProductCardType;