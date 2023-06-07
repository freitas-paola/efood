import Restaurant from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import { ListContainer, RestaurantsContainer } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <RestaurantsContainer>
    <div className="container">
      <ListContainer>
        {restaurants.map((res) => (
          <RestaurantCard
            key={res.id}
            name={res.name}
            image={res.image}
            stars={res.stars}
            description={res.description}
            infos={res.infos}
          />
        ))}
      </ListContainer>
    </div>
  </RestaurantsContainer>
)

export default RestaurantsList
