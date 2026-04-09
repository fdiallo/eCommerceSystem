import Product from "../models/Product";

/**
 * Computes discount
 * @param Product 
 * @returns number
 */
export function calculateDiscount(product: Product): number {
    return (product.getPrice * product.getDiscountPercentage) / 100
}


