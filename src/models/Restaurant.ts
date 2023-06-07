import Product from './Product'

class Restaurant {
  name: string
  image: string
  stars: number
  description: string
  id: number
  infos: string[]
  products: Product[]

  constructor(
    name: string,
    image: string,
    stars: number,
    description: string,
    id: number,
    infos: string[],
    products: Product[]
  ) {
    this.id = id
    this.name = name
    this.image = image
    this.stars = stars
    this.description = description
    this.infos = infos
    this.products = products
  }
}

export default Restaurant
