import styled from 'styled-components';

export const Container = styled.div`
    min-width:100vw;
    max-width:100%;
    min-height:100vh;
    min-width:350px;
    background-color:var(--bgPages);
`;

export const ProductsList = styled.main`
   width:100%;
   min-height:100%;
   display:flex;
   justify-content:center;
   flex-wrap:wrap;
   gap:15px;
   padding:100px 50px;

  @media(max-width:500px){
    padding:100px 10px;
    gap:5px;
  }
`;

export const Sidebar = styled.aside`
    width:380px;
    height:calc(100vh - 80px);
    display:flex;
    flex-direction:row;
    position:fixed;
    right:${({openCart})=> openCart?"0":"-500px"};
    bottom:0;
    gap:5px;
    transition:1.2s ease-in-out;
    box-shadow:0px 5px 20px rgb(0 45 98 / 6%);

    @media(max-width:500px){
        width:100%
    }
   `;

export const Cart = styled.form`
    width:100%;
    height:100%;
    gap:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:var(--bgPages);
    padding:20px 10px;
    z-index:988;
    overflow-y:scroll;
        scrollbar-width: none;
        -ms-overflow-style: none; 
        &::-webkit-scrollbar{
            width:0;
            height:0;
        }

        h3{
            font-size:20px;
            color:var(--spnCard);
        }
`;

export const ClientForm = styled.div`
    width:100%;
    min-height:150px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    gap:15px;
    padding:10px;

`;


export const ProductsCart = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;        
`;