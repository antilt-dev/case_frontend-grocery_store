import styled from 'styled-components';

export const Container = styled.div`
    width:200px;
    height:275px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    box-shadow:0px 5px 20px rgb(0 45 98 / 6%);
    background-color:rgb(255,255,255);
    gap:10px;
    padding:20px 0;

    img{
        width:60%; 
        filter:opacity(.4)
    }

    p{
        color:#b7b7b7;
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
        color:rgb(45,167,122);
        font-size:16px;
        font-weight:bold;
    }
    button{
        flex:none;
    }
`;