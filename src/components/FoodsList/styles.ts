import styled from 'styled-components'
import { colors } from '../../styles'

export const FoodsListContainer = styled.div`
  background-color: ${colors.lightSalmon};
  padding-top: 3.5rem;
  padding-bottom: 7.5rem;
`
export const FoodsListItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`
