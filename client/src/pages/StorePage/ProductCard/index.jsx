import React from "react";
import {Container} from './styles'
import productImg from '../../../assets/default-product.png'
import { Button } from "@mui/material";


const ProductCard=({name,price,id,onClick})=>{
  const formatedPrice = price.toString().split(".").join(",")
  return (
   <Container>
      <img src={productImg} alt="uma imagem"/>
      <p>{name}</p>
      <p>R$ <span>{formatedPrice}</span></p>
      <Button variant="outlined" color="secondary" onClick={()=>onClick(id)}>Adicionar</Button>
   </Container>
  );
}

export default ProductCard;