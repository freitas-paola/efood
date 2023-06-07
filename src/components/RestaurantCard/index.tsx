import { Link } from 'react-router-dom'
import {
  ImageContainer,
  RestaurantContainer,
  TextContainer,
  TitleContainer,
  Text,
  Title,
  Button,
  Infos
} from './styles'
import star from '../../assets/images/star.svg'
import Tag from '../Tag'

type Props = {
  name: string
  image: string
  stars: number
  description: string
  infos: string[]
}

const RestaurantCard = ({ name, image, stars, description, infos }: Props) => (
  <RestaurantContainer>
    <ImageContainer>
      <img src={image} alt="Restaurante" />
    </ImageContainer>
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <TextContainer>
      <TitleContainer>
        <Title>{name}</Title>
        <div>
          <Title as="p">{stars}</Title>
          <img src={star} alt="star" />
        </div>
      </TitleContainer>
      <Text>{description}</Text>
      <Button>
        <Link to={name}> Saiba mais</Link>
      </Button>
    </TextContainer>
  </RestaurantContainer>
)

export default RestaurantCard
