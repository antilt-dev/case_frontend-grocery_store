import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:80px;
    min-width:350px;
    background-color:var(--bgHeader);
    border-top:8px solid rgb(45,167,122);
    box-shadow:0px 5px 20px rgb(0 45 98 / 6%);
    padding:0 70px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:fixed;
    z-index:999; 

     img{
        max-height:90%;
        cursor:pointer;

        &:nth-child(2){
         display:none;
         max-height:80%
        }
     }

     div{
      display:flex;
      align-items:flex-end;
      gap:20px;
      
      &:nth-child(1){
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
            transform:scale(1)
         }

         @media(max-width:550px){
            display:none;
         }

      }
     }

    

     @media (max-width:800px){
        padding: 0 20px;

        img,button,div{
         transform:scale(.9)
        }
     }

     @media (max-width:700px){
        padding: 0 10px;
        img:nth-child(1){
            display:none
        }
        img:nth-child(2){
         display:block
        }
     }

     @media(max-width:550px){
      box-shadow:none
     }
`;