import React from "react";
import {Container} from './styles'
import logo from '../../assets/shopper-logo.png'
import shortLogo from '../../assets/icon.png'
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goHome } from "../../routes/coordinator";

const Header=({onClickNavigate,buttonChildren,buttonCart})=>{
  const navigate = useNavigate()
  return (
   <Container>
        <img src={logo} alt="logo shopper" onClick={()=>goHome(navigate)}/>
        <img src={shortLogo} alt="logo shopper" onClick={()=>goHome(navigate)}/>
        <div>
          <Button variant="contained" onClick={onClickNavigate} color="secondary">{buttonChildren}</Button>
          {buttonCart}
        </div>
        
   </Container>
  );
}

export default Header;