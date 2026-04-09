/**
 * Define a model class used to map api response data
 */
export default class Product {
    public static taxPercentage = 4.75;
    public static groceriesTaxPercentage = 3;

    private id: number
    private sku: string
    private title: string
    private description: string
    private category: string
    private price: number
    private discountedPrice: number
    private discountPercentage: number
    private weight: number

    constructor(id: number, sku: string, title: string, description: string,
        category: string, price: number, discountedPrice: number, discountPercentage: number, weight: number) {
        this.id = id
        this.sku = sku
        this.title = title
        this.description = description
        this.category = category
        this.price = price
        this.discountedPrice = discountedPrice
        this.discountPercentage = discountPercentage
        this.weight = weight
    }

    /**
     * Getter for price
     */
    get getPrice(): number {
        return this.price
    }

    /**
     * Getter for category
     */
    get getCategory(): string {
        return this.category
    }

    /**
     * Getter for discountPercentage
     */
    get getDiscountPercentage(): number {
        return this.discountPercentage
    }

    /**
     * Displays product data
     * @returns string
     */
    displayDetails(): string {
        return `
        SKU: ${this.sku}
        Title: ${this.title} 
        Description: ${this.description}
        Category: ${this.category}
        Price: ${this.price}
        Discounted Price: ${this.getPriceWithDiscount()}
        Discount Percentage: ${this.discountPercentage}
        Weight: ${this.weight}\n`
    }

    /**
     * Computes price with discount
     * @returns price with discount
     */
    getPriceWithDiscount(): number {
        return this.price - (this.price * this.discountPercentage) / 100
    }
}


