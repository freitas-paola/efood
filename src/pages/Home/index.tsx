import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'

import { restaurants } from '../objects/objects'

const Home = () => (
  <>
    <Header />
    <RestaurantsList restaurants={restaurants} />
  </>
)

export default Home
