import {
  FoodImg,
  Icon,
  ModalContainer,
  ModalContent,
  ModalText
} from './styles'
import close from '../../assets/images/close.svg'
import { ModalState } from '../FoodsList'

type Props = {
  modal: ModalState
  closeModal: () => void
}

const Modal = ({ modal, closeModal }: Props) => {
  const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
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
  )
}

export default Modal
