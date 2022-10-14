import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;

    border:solid 1px black;
`;

export const Buttons = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:0 10px;
    height:50%;
    
    
    div{
        width:50%;
        height:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:flex-start;
    }

    input{
        outline:none;
        height:60%;
        width:50px;
        border-radius:10px;
        border:1px solid #b7b7b7;
        padding:0 10px;
        text-align:center;
    }
`;

export const ProductInfo = styled.div`
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
    height:50%;
    

    p,span{
        font-size:16px;
    }

    
    `;