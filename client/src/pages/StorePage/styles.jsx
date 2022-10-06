import styled from 'styled-components';

export const Container = styled.div`
    min-width:100%;
    max-width:100%;
    min-height:100vh;
    background-color:#E8F9F3;
`;

export const Header = styled.header`
    width:100%;
    height:80px;
    background-color:rgb(255,255,255);
    border-top:8px solid rgb(45,167,122);
    box-shadow:0px 5px 20px rgb(0 45 98 / 6%);
    padding:0 113px;
    display:flex;
    align-items:center;
    justify-content:space-between;
     
     img{
        max-height:80%;
        cursor:pointer;
     }

     @media (max-width:800px){
        padding: 0 50px;
     }

     @media (max-width:500px){
        padding: 0 20px;
     }
`;