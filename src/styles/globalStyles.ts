import { createGlobalStyle } from 'styled-components'
import Colors from './theme'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${Colors.basic.dark};
    overflow: hidden;
  }
`

export default GlobalStyles