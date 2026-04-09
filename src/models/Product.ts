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

    get getPrice(): number {
        return this.price
    }

    get getCategory(): string {
        return this.category
    }

    get getDiscountPercentage(): number {
        return this.discountPercentage
    }

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

    getPriceWithDiscount(): number {
        return this.price - (this.price * this.discountPercentage) / 100
    }
}


