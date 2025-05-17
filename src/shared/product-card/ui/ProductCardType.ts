import ProductType from "./ProductType"

type ProductCardType = {
    product: ProductType, 
    setCart: React.Dispatch<React.SetStateAction<ProductType[]>>,
    cart: ProductType[]
}

export default ProductCardType;