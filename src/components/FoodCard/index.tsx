import { FoodCardContainer } from './styles'

type Props = {
  name: string
  image: string
  description: string
}

const FoodCard = ({ name, image, description }: Props) => (
  <FoodCardContainer>
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    <button>Adicionar ao carrinho</button>
  </FoodCardContainer>
)

export default FoodCard
