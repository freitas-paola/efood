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

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  background-color: ${colors.pink};
  display: flex;
  padding: 2rem;
  position: relative;
  z-index: 1;
`
export const FoodImg = styled.img`
  width: 17.5rem;
  height: 17.5rem;
  object-fit: cover;
`
export const ModalText = styled.div`
  color: ${colors.branco};
  font-size: 0.87rem;
  margin-left: 1.5rem;

  h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.3rem;
    margin-bottom: 1.25rem;
  }

  button {
    padding: 0.25rem 0.5rem;
    border: none;
    background-color: ${colors.salmon};
    color: ${colors.pink};
    font-weight: bold;
  }
`
export const Icon = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
`
