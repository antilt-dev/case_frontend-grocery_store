import React from "react";
import {Container} from './styles'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ButtonCart=({itemsCart,toggleCart,price})=>{
    const formatedPrice = price.toFixed(2).toString().split(".").join(",")
  return (
   <Container>
    <IconButton aria-label="cart"  onClick={toggleCart}>
      <Badge badgeContent={itemsCart} color="secondary"  >
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
    <p>R$ {formatedPrice}</p>
   </Container>
  );
}

export default ButtonCart;