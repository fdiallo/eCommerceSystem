import Product from "../models/Product";

export function calculateDiscount(product: Product){
    return (product.price * product.discountPercentage) / 100
}

export function calculateTax(product: Product) {
    if(product.category === "groceries") return product.price * Product.groceriesTaxPercentage
    return product.price * Product.taxPercentage
}

