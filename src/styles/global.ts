'use client'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        font-family: 'Roboto', sans-serif;
        font-size: 100%;
        background-color: #06092b;
        color: #fff;
    }
`

export default GlobalStyles
