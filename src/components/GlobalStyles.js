import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
            background: white;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        background: #151515;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #fff;
    }
    h3{
        font-size: 1.3rem;
        color: #fff;
        padding: 0.8rem 0rem;
        margin: 1rem 0;

        &:hover{
            color: #797979;
        }
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
        margin-bottom: 1rem;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
`;

export default GlobalStyles;
