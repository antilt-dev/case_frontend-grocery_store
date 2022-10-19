import React, { useContext } from "react";
import {Container} from './styles'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GlobalContext from "../../../contexts/GlobalContext";


const ButtonCart=({itemsCart,toggleCart,price})=>{
  const {darkMode} = useContext(GlobalContext)
    const formatedPrice = price?.toFixed(2).toString().split(".").join(",")
  return (
   <Container style={{display:price?"flex":"none"}}>
    <IconButton aria-label="cart"  onClick={toggleCart}>
      <Badge badgeContent={itemsCart} color="secondary"  >
        <ShoppingCartIcon sx={{color:darkMode?"white":"black"}}/>
      </Badge>
    </IconButton>
    <p>R$ {formatedPrice}</p>
   </Container>
  );
}

export default ButtonCart;