import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { HeaderContainer } from './styles'

const RestaurantHeader = () => (
  <HeaderContainer>
    <Link to="/">Restaurantes</Link>
    <Link to="/">
      <img src={logo} alt="Efood" />
    </Link>
    <p>0 produto(s) no carrinho</p>
  </HeaderContainer>
)

export default RestaurantHeader
