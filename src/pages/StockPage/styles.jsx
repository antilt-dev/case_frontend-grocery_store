import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    min-height: 100vh;
`;

export const StockList = styled.main`
    width:100%;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    padding:150px 20%;
    border:solid 1px black;
    gap:5px;

    @media (max-width:800px){
        padding:150px 10%;
    }

    @media (max-width:500px){
        padding:150px 5%;
    }
`;

export const Head = styled.div`
    width:100%;
    height:80px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    gap:10px;

    h1{
        font-size:26px;
        letter-spacing:3px;
        color:#2da77a;
    }

    div{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:flex-end;

        p{
            font-size:18px;
            font-weight:bold
        }
    }
`;