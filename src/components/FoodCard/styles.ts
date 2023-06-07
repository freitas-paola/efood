import styled from 'styled-components'
import { colors } from '../../styles'

export const FoodCardContainer = styled.li`
  width: 20rem;
  height: 21rem;
  background-color: ${colors.pink};
  padding: 0.5rem;
  color: ${colors.salmon};

  img {
    width: 19rem;
    height: 10.5rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.1rem;
  }

  p {
    font-size: 0.87rem;
    line-height: 1.3rem;
    margin: 0.5rem 0;
  }

  button {
    width: 100%;
    padding: 0.24rem 0;
    border: none;
    background-color: ${colors.salmon};
    font-weight: 700;
    font-size: 0.87rem;
    line-height: 1rem;
    color: ${colors.pink};

    &:hover {
      background-color: ${colors.lightSalmon};
      cursor: pointer;
    }
  }
`
