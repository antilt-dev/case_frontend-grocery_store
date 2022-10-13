import React from "react";
import {Container} from './styles'


const ProductCard=({name,price,imgLink})=>{
  return (
   <Container>
    <img src={imgLink} alt="uma imagem"/>
    <h1>youtube musdsadaic</h1>
    <p>{name}</p>
    <span>R$ {price}</span>
   </Container>
  );
}

export default ProductCard;