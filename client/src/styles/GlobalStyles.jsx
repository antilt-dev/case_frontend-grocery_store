import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: 'Roboto', sans-serif;
    }

    #root{
        display:flex;
        flex-direction:column;
        align-items:center;
    }
   
`;