import { Category, Product } from '../entities/product.entity'
import { ProductsRepository } from '../interfaces/products.repository'

export class ProductsRepositoryMock implements ProductsRepository {
  private readonly products: Product[] = [
    new Product({
      id: '1',
      name: 'Test',
      price: 12,
      description: 'dsa',
      image: '',
      category: new Category({
        id: '1',
        name: 'Test 4',
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      quantity: 10,
      rating: 5,
      discount: 10,
      isFeatured: false,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  ]

  findAll(): Promise<Product[]> {
    return Promise.resolve(this.products)
  }

  findById(id: string): Promise<Product | null> {
    throw new Error('Method not implemented.')
  }

  create(product: Product): Promise<Product> {
    throw new Error('Method not implemented.')
  }

  update(id: string, product: Product): Promise<Product | null> {
    throw new Error('Method not implemented.')
  }

  delete(id: string): Promise<Product | null> {
    throw new Error('Method not implemented.')
  }

  save(product: Product): Promise<Product> {
    this.products.push(product)
    return Promise.resolve(product)
  }
}

export const productsRepositoryMock = new ProductsRepositoryMock()
