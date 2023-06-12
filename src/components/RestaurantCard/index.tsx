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
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const RestaurantCard = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => (
  <RestaurantContainer>
    <ImageContainer>
      <img src={capa} alt="Restaurante" />
    </ImageContainer>
    <Infos>
      {destacado ? <Tag>Destaque da semana</Tag> : ''}
      <Tag>{tipo}</Tag>
    </Infos>
    <TextContainer>
      <TitleContainer>
        <Title>{titulo}</Title>
        <div>
          <Title as="p">{avaliacao}</Title>
          <img src={star} alt="star" />
        </div>
      </TitleContainer>
      <Text>{descricao}</Text>
      <Button>
        <Link to={`/restaurante/${id}`}> Saiba mais</Link>
      </Button>
    </TextContainer>
  </RestaurantContainer>
)

export default RestaurantCard
