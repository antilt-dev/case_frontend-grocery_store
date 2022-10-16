import React from "react";
import {Container} from './styles'

const ProductCard=({name,stock})=>{
  return (
   <Container>
        <p>{name}</p>
        <span>{stock}</span>
   </Container>
  );
}

export default ProductCard;