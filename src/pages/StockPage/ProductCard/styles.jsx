import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    min-width:350px;
    height:30px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    border-bottom:solid var(--bgCard) 2px;
    padding:0 5px;

    p{
        text-overflow:ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width:80%;
        font-size:16px;
        color:var(--txtCard);
    }
    span{
        color:var(--txtCard);
    }

    @media (max-width:500px){
       height:50px;
      
       p{
            white-space: normal;
       }
    }

`;