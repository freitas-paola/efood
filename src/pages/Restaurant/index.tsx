import RestaurantHeader from '../../components/RestaurantHeader'

import Banner from '../../components/Banner'
import { restaurants } from '../objects/objects'
import FoodsList from '../../components/FoodsList'

type Props = {
  id: number
}

const Restaurant = ({ id }: Props) => (
  <>
    <RestaurantHeader />
    <Banner
      name={restaurants[id].name}
      infos={restaurants[id].infos}
      image={restaurants[id].image}
    />
    <FoodsList products={restaurants[id].products} />
  </>
)

export default Restaurant
