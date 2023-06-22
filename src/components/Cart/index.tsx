import { useDispatch, useSelector } from 'react-redux'

import { CartContainer, Overlay, Sidebar, CartItem, Price } from './styles'
import { Button } from '../../styles'
import { close, remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { formatPrice } from '../Modal'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, currentPrice) => {
      return (acc += currentPrice.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={Math.random()}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatPrice(item.preco)}</p>
              </div>
              <button onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Price>
          <p>Valor total</p>
          <p>{formatPrice(getTotalPrice())}</p>
        </Price>
        <Button>Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
