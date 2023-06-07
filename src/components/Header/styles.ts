import styled from 'styled-components'
import header from '../../assets/images/header.png'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  background-image: url(${header});
  height: 24rem;
  width: 100%;

  img {
    display: block;
    margin: 0 auto;
    padding-top: 4rem;
  }
`

export const Title = styled.h1`
  width: 33.75rem;
  text-align: center;
  margin: 0 auto;
  font-weight: 700;
  line-height: 2.5rem;
  font-size: 2.25rem;
  padding-top: 8.5rem;
  color: ${colors.pink};
`
