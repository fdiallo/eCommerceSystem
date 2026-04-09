import Product from "./models/Product";
import { calculateTax } from "./utils/taxCalculator";
import { calculateDiscount } from "./utils/discountCalculator";
import { fetchProductApi } from "./services/apiService";
import { NetworkError } from "./utils/errorHandler";

let productList: Array<Product> = [];

(async () => {
    try {
        const products = await fetchProductApi()

        for (const product of products) {
            const id = product.id
            const title = product.title
            const sku = product.sku
            const description = product.description
            const category = product.category
            const price = product.price
            const discountedPrice = calculateDiscount(product) + calculateTax(product)
            const discountPercentage = product.discountPercentage
            const weight = product.weight

            productList.push(new Product(id, sku, title, description, category, price, discountedPrice, discountPercentage, weight))
        }
        console.log("Product details: \n")
        for (const product of productList) {
            console.log(product.displayDetails())
        }

    } catch (error) {
        if (error instanceof NetworkError) {
            console.log(error.message)
        } else if (error instanceof Error) {
            console.log("Generic error: ", error.message)
        } else {
            console.log(" An unknown error has occurred.")
        }
    }

})()
