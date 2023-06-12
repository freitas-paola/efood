import { Food } from '../../pages/Home'
import { FoodCardContainer } from './styles'

type Props = {
  products: Food[]
  name: string
  image: string
  description: string
  id: number
  setModal: React.Dispatch<
    React.SetStateAction<{
      isVisible: boolean
    }>
  >
  setProduct: React.Dispatch<React.SetStateAction<Food | undefined>>
}

const FoodCard = ({
  name,
  image,
  description,
  id,
  products,
  setModal,
  setProduct
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 165) {
      return description.slice(0, 165) + '...'
    }
  }

  const getItem = (id: number) => {
    const itemId = products.map((pro) => pro.id)
    const filteredItemId = itemId.filter((currentId) => currentId === id)
    return filteredItemId
  }

  const addCarrinho = () => {
    const [productId] = getItem(id)
    setProduct(products[productId - 1])
    setModal({
      isVisible: true
    })
  }

  return (
    <>
      <FoodCardContainer>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{getDescription(description)}</p>
        <button onClick={() => addCarrinho()}>Adicionar ao carrinho</button>
      </FoodCardContainer>
    </>
  )
}

export default FoodCard
