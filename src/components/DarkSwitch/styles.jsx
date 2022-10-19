import styled from 'styled-components';

export const Container = styled.div`
    max-width:200px;
    display:flex;
    align-items:flex-end;
    margin-right:20px;
    align-items:center;
    border-radius:20px;
    padding:0 10px;
    border:none;
    background-color:rgba(0,0,0,.1);
    gap:5px;
    span{
            color:var(--spnCard);
            font-size:16px;
            font-weight:bold;
            letter-spacing:1px;
         }

         @media (max-width:800px){
            margin-right:5px;
         }

`;