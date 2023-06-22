import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import lixo from '../../assets/images/lixo.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  z-index: 1;
  padding: 2.5rem 1rem 0 1rem;
  max-width: 22.5rem;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 70vw;
  }
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.salmon};
  padding-bottom: 0.75rem;
  padding-top: 0.5rem;
  position: relative;
  margin-bottom: 1rem;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  div {
    color: ${colors.pink};

    h3 {
      font-size: 1.1rem;
      font-weight: bold;
      padding-bottom: 1rem;

      @media (max-width: ${breakpoints.tablet}) {
        font-size: 1rem;
      }
    }

    p {
      font-size: 0.85rem;
    }
  }

  button {
    background-image: url(${lixo});
    width: 1rem;
    height: 1rem;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
  }
`
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1rem;

  p {
    font-weight: bold;
    font-size: 0.85rem;
    color: ${colors.salmon};
  }
`
