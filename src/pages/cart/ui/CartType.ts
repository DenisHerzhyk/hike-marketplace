import ProductType from "../../../shared/product-card/ui/ProductType";

type CartType = {
    setCart: React.Dispatch<React.SetStateAction<ProductType[]>>,
    cart: ProductType[]
}

export default CartType;
