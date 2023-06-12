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
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
  setProduct: React.Dispatch<React.SetStateAction<Food | undefined>>
}

const FoodsList = ({
  products,
  foto,
  nome,
  descricao,
  porcao,
  preco,
  setProduct
}: Props) => {
  const [modal, setModal] = useState({
    isVisible: false
  })

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
                setProduct={setProduct}
              />
            ))}
          </FoodsListItems>
        </div>
      </FoodsListContainer>
      <ModalContainer className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <FoodImg src={foto} alt="" />
          <ModalText>
            <h4>{nome}</h4>
            <p>{descricao}</p>
            <p>Serve:{porcao}</p>
            <button>Adicionar ao carrinho - {preco} </button>
          </ModalText>
          <Icon
            src={close}
            alt="Fechar"
            onClick={() => setModal({ isVisible: false })}
          />
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModal({ isVisible: false })}
        ></div>
      </ModalContainer>
    </>
  )
}

export default FoodsList
