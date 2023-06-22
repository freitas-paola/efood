import { useDispatch } from 'react-redux'

import {
  FoodImg,
  Icon,
  ModalContainer,
  ModalContent,
  ModalText
} from './styles'
import close from '../../assets/images/close.svg'
import { ModalState } from '../FoodsList'
import { add, open } from '../../store/reducers/cart'
import { Button } from '../../styles'

type Props = {
  modal: ModalState
  closeModal: () => void
}

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Modal = ({ modal, closeModal }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(modal))
    dispatch(open())
    closeModal()
  }

  return (
    <ModalContainer className={modal.isVisible ? 'visivel' : ''}>
      <ModalContent className="container">
        <FoodImg src={modal.foto} alt={modal.nome} />
        <ModalText>
          <h4>{modal.nome}</h4>
          <p>{modal.descricao}</p>
          <p>Serve: {modal.porcao}</p>
          <Button onClick={addToCart}>
            Adicionar ao carrinho - {formatPrice(modal.preco)}{' '}
          </Button>
        </ModalText>
        <Icon src={close} alt="Fechar" onClick={() => closeModal()} />
      </ModalContent>
      <div className="overlay" onClick={() => closeModal()}></div>
    </ModalContainer>
  )
}

export default Modal
