import styled from 'styled-components';

export const Container = styled.div`
    min-width:100%;
    max-width:100%;
    min-height:100vh;
    background-color:#E8F9F3;
`;

export const ProductsList = styled.main`
   width:100%;
   min-height:100%;
   display:flex;
   justify-content:center;
   flex-wrap:wrap;
   gap:5px;
   padding:50px;
`;

export const Sidebar = styled.aside`
    width:420px;
    height:100%;
    display:flex;
    flex-direction:row;
    position:absolute;
    right:50%;
    top:200px;
`;

export const CartButton = styled.div`
    width:25px;
    height:25px;
`;

export const Cart = styled.div`
    width:100%;
    height:100%;
    gap:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:yellow;
    padding:0 10px;
`;

export const ClientForm = styled.div`
    width:80%;
    height:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
`;

export const ProductsCart = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
`;