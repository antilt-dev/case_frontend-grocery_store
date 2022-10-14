import React from "react";
import {Container} from './styles'
import logo from '../../assets/shopper-logo.png'
import { Button, Switch } from "@mui/material";

const Header=({onClick,buttonChildren})=>{
  return (
   <Container>
        <img src={logo} alt="logo shopper"/>
        <div>
            <Button variant="contained" color="secondary">{buttonChildren}</Button>
            <Switch name="loading" color="secondary"/>
        </div>  

   </Container>
  );
}

export default Header;