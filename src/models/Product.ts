export default class Product {
    public static taxPercentage = 4.75;
    public static groceriesTaxPercentage = 3;

    private _id: number
    private _sku: string
    private _title: string
    private _description: string
    private _category: string
    private _price: number
    private _discountPercentage
    private _weight: number

    constructor(id: number, sku: string, title: string, description: string,
        category: string, price: number, discountPercentage: number, weight: number) {
        this._id = id
        this._sku = sku
        this._title = title
        this._description = description
        this._category = category
        this._price = price
        this._discountPercentage = discountPercentage
        this._weight = weight
    }

    get price(): number {
        return this._price
    }

    get category(): string {
        return this._category
    }

    get discountPercentage(): number {
        return this.discountPercentage
    }

    displayDetails(): string {
        return `Product details:
        Title: ${this._title} 
        Description: ${this._description}
        Category: ${this._category}
        Weight: ${this._weight}
        Price: $${this._price}.`
    }

    getPriceWithDiscount(): number {
        return this._price - (this._price * this._discountPercentage) / 100
    }
}


