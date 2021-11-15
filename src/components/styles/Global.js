import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "styled-components"

export const Theme = {
  colors: {
    navbar: "#C9EDFF",
    header: "#EBFCFF",
    navlink: "#006699",
    navlinkHover: "#47C2FF",
    body: "#F7F7F7",
    assetCard: "#D8F2FF",
    footer: "#006699",
  },
  mobile: "768px",
}

const GlobalStyles = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap'); */

  * {
    /* box-sizing: border-box; */
  }

  body {
    /* background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0; */
  }

  p {
    /* opacity: 0.6;
    line-height: 1.5; */
  }

  img {
    /* max-width: 100%; */
  }
`

export default GlobalStyles
