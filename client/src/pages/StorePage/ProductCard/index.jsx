import React from "react";
import {Container} from './styles'
import defaultImg from '../../../assets/default-product.png'

const ProductCard=({name,price})=>{
  return (
   <Container>
    <image src={defaultImg} alt="Empity product"/>
    <p>{name}</p>
    <span>R$ {price}</span>
   </Container>
  );
}

export default ProductCard;