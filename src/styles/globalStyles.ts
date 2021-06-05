import { createGlobalStyle } from 'styled-components'
import Colors from './theme'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${Colors.basic.dark};
    overflow: hidden;
    border: none;
    outline: none;
    box-shadow: none;
    box-sizing: border-box;

    .mt-10 {
      margin-top: 10px;
    }
    .mt-15 {
      margin-top: 15px;
    }
    .ml-5 {
      margin-left: 5px;
    }
    
    .flex-center{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .invisible {
      opacity: 0;
    }
    
    .absolute-center {
      position: absolute;
    }
    
    .loading {
      animation: rotating .5s linear infinite;
    }
    
    @keyframes rotating {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`

export default GlobalStyles