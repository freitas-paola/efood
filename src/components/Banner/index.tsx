import { BannerContainer } from './styles'

export type Props = {
  name: string
  infos: string[]
  image: string
}

const Banner = ({ name, infos, image }: Props) => (
  <BannerContainer image={image}>
    <p>{infos[infos.length - 1]}</p>
    <h2>{name}</h2>
  </BannerContainer>
)

export default Banner
