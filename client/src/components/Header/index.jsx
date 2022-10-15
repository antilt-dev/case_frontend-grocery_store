import React from "react";
import {Container} from './styles'
import logo from '../../assets/shopper-logo.png'
import shortLogo from '../../assets/icon.png'
import { Button } from "@mui/material";

const Header=({onClick,buttonChildren,buttonCart})=>{
  return (
   <Container>
        <img src={logo} alt="logo shopper"/>
        <img src={shortLogo} alt="logo shopper"/>
        <div>
          <Button variant="contained" onClick={onClick} color="secondary">{buttonChildren}</Button>
          {buttonCart}
        </div>
        
   </Container>
  );
}

export default Header;