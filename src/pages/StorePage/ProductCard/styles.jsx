import styled from 'styled-components';

export const Container = styled.div`
    width:200px;
    height:275px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    box-shadow:0px 5px 20px rgb(0 45 98 / 6%);
    background-color:var(--bgCard);
    gap:10px;
    padding:20px 0;
    border-radius:15px;

    @media(max-width:520px){
        width:160px;
        height:275px;
    }

    img{
        width:60%; 
        filter:opacity(.4)
        
    }

    p{
        color:var(--txtCard);
        font-size:14px;
        width:90%;
        text-align:center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; 
                line-clamp: 2; 
        -webkit-box-orient: vertical;
    }

    span{
        color:var(--spnCard);
        font-size:16px;
        font-weight:bold;
        letter-spacing:1px;
    }
    button{
        flex:none;
    }
`;