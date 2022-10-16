import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    min-width:380px;
    height:30px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    border-bottom:solid #b7b7b7 2px;

    p{
        text-overflow:ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width:80%;
        font-size:16px;
    }
    span{
        
    }

    @media (max-width:500px){
       height:50px;
      
       p{
            white-space: normal;
       }
    }

`;