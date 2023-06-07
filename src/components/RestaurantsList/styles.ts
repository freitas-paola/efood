import styled from 'styled-components'
import { colors } from '../../styles'

export const RestaurantsContainer = styled.section`
  padding-top: 5rem;
  padding-bottom: 7.5rem;
  background-color: ${colors.lightSalmon};
`

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5rem;
  row-gap: 3rem;
`
