import { createGlobalStyle } from 'styled-components'

export const colors = {
  salmon: '#FFEBD9',
  lightSalmon: '#fff8f2',
  pink: '#E66767',
  lightPink: '#e97676',
  branco: '#fff'
}

export const GlobalCSS = createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
