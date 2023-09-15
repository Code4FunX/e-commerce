export class Category {
  private _id: string
  private _name: string
  private _createdAt: Date
  private _updatedAt: Date

  constructor(category: {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
  }) {
    this._id = category.id
    this._name = category.name
    this._createdAt = category.createdAt
    this._updatedAt = category.updatedAt
  }
}

export class Product {
  private _id: string
  private _name: string
  private _price: number
  private _description: string
  private _image: string
  private _category: Category
  private _quantity: number
  private _rating: number
  private _discount: number
  private _isFeatured: boolean
  private _isActive: boolean
  private _createdAt: Date
  private _updatedAt: Date

  constructor(product: {
    id: string
    name: string
    price: number
    description: string
    image: string
    category: Category
    quantity: number
    rating: number
    discount: number
    isFeatured: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
  }) {
    this._id = product.id
    this._name = product.name
    this._price = product.price
    this._description = product.description
    this._image = product.image
    this._category = product.category
    this._quantity = product.quantity
    this._rating = product.rating
    this._discount = product.discount
    this._isFeatured = product.isFeatured
    this._isActive = product.isActive
    this._createdAt = product.createdAt
    this._updatedAt = product.updatedAt
  }
}
