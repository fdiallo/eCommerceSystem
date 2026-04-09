import Product from "../models/Product"

export function calculateTax(product: Product): number {
    if(product.getCategory === "groceries") return (product.getPrice * Product.groceriesTaxPercentage) / 100
    return (product.getPrice * Product.taxPercentage) / 100
}