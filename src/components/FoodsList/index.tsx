import { Food } from '../../pages/Home'
import FoodCard from '../FoodCard'
import {
  FoodImg,
  FoodsListContainer,
  FoodsListItems,
  Icon,
  ModalContainer,
  ModalContent,
  ModalText
} from './styles'
import close from '../../assets/images/close.svg'
import { useState } from 'react'

type Props = {
  products: Food[]
}

export interface ModalState extends Food {
  isVisible: boolean
}

const FoodsList = ({ products }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    foto: '',
    id: 0,
    nome: '',
    preco: 0,
    porcao: '',
    descricao: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      foto: '',
      id: 0,
      nome: '',
      preco: 0,
      porcao: '',
      descricao: ''
    })
  }

  const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <FoodsListContainer>
        <div className="container">
          <FoodsListItems>
            {products.map((pro) => (
              <FoodCard
                key={pro.id}
                name={pro.nome}
                image={pro.foto}
                description={pro.descricao}
                id={pro.id}
                products={products}
                setModal={setModal}
              />
            ))}
          </FoodsListItems>
        </div>
      </FoodsListContainer>
      <ModalContainer className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <FoodImg src={modal.foto} alt={modal.nome} />
          <ModalText>
            <h4>{modal.nome}</h4>
            <p>{modal.descricao}</p>
            <p>Serve: {modal.porcao}</p>
            <button>Adicionar ao carrinho - {formatPrice(modal.preco)} </button>
          </ModalText>
          <Icon src={close} alt="Fechar" onClick={() => closeModal()} />
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </ModalContainer>
    </>
  )
}

export default FoodsList
