import styled from 'styled-components';

export const Container = styled.div`
    width:150px;
    height:50px;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    border-bottom:solid 0.1px var(--spnCard);
    border-radius:10px;

    p{
        font-size:16px;
        margin-bottom:10px;
        font-weight:bold;
        color:var(--spnCard);
    }
`;