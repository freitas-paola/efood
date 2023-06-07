import Product from '../../models/Product'
import FoodCard from '../FoodCard'
import { FoodsListContainer, FoodsListItems } from './styles'

type Props = {
  products: Product[]
}

const FoodsList = ({ products }: Props) => (
  <FoodsListContainer>
    <div className="container">
      <FoodsListItems>
        {products.map((pro) => (
          <FoodCard
            key={pro.id}
            name={pro.name}
            image={pro.image}
            description={pro.description}
          />
        ))}
      </FoodsListItems>
    </div>
  </FoodsListContainer>
)

export default FoodsList
