import Product from "../models/Product";
import { NetworkError } from "../utils/errorHandler";

/**
 * Define a function called fetchProductApi that makes 
 * an api call using the fetch api
 * @returns Promise
 */
export async function fetchProductApi(): Promise<any> {
    const url = "https://dummyjson.com/products"
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new NetworkError(`Network Error! Status: ${response.status}`)
        }
        const data = await response.json()
        return data.products

    } catch (error) {
        console.log(error)
    } finally {
        console.log("Api call has been attempted!\n")
    }
}
