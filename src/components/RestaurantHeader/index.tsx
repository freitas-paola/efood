import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { RootReducer } from '../../store'
import { HeaderContainer } from './styles'
import { open } from '../../store/reducers/cart'

const RestaurantHeader = () => {
  const dispatch = useDispatch()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <Link to="/">Restaurantes</Link>
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
      <p onClick={openCart}>{items.length} produto(s) no carrinho</p>
    </HeaderContainer>
  )
}

export default RestaurantHeader
