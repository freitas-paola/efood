import { Food } from '../../pages/Home'
import { ModalState } from '../FoodsList'
import { FoodCardContainer } from './styles'

type Props = {
  products: Food[]
  name: string
  image: string
  description: string
  id: number
  setModal: React.Dispatch<React.SetStateAction<ModalState>>
}

const FoodCard = ({
  name,
  image,
  description,
  id,
  products,
  setModal
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 165) {
      return description.slice(0, 165) + '...'
    }
  }

  const addCarrinho = () => {
    const finalId = products[id - 1]
    setModal({
      isVisible: true,
      id: finalId.id,
      foto: finalId.foto,
      nome: finalId.nome,
      preco: finalId.preco,
      porcao: finalId.porcao,
      descricao: finalId.descricao
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
