import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

    * {
        font-family: 'Montserrat', Helvetica, sans-serif;
    }
 
    body {
        margin: 0;  
    }
`

function GlobalStyle() {
  return <StyledGlobalStyle />
}

export default GlobalStyle

////
/* Ici cette syntaxe revient au même que
background-color: ${({ props }) =>
props.isDarkMode ? '#2F2E41' : 'white'};
*/
