import { productsRepositoryMock } from '@/@core/mocks/products.repository.mock'

export const GET = async (request: Request) => {
  // const { searchParams } = new URL(request.url)
  // const id = searchParams.get('categoryId')
  const products = await productsRepositoryMock.findAll()
  return Response.json(products)
}
