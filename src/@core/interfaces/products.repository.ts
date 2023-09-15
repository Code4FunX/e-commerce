import { Product } from '../entities/product.entity'

export interface ProductsRepository {
  findAll(): Promise<Product[]>
  findById(id: string): Promise<Product | null>
  create(product: Product): Promise<Product>
  update(id: string, product: Product): Promise<Product | null>
  delete(id: string): Promise<Product | null>
}
