import React, {useState} from "react";
import {Container, Header} from './styles'
import logo from '../../assets/shopper-logo.png'
import { Button, Switch  } from "@mui/material";
import axios from 'axios';




const StorePage=()=>{

   const [darkmode,setDarkmode] = useState(false)
   const changeTheme = () =>{
    setDarkmode(!darkmode)
    console.log(darkmode)
   }
   const getProducts = async ()=>{
    return await axios.get("http://localhost:3003/products")
   }
    const products = getProducts()

    const productsRender = products && products.data
            
        console.log(productsRender)
   
  
   
   
  return (
    
   <Container>
        
        <Header>
            <img src={logo} alt="logo shopper"/>
            <div>
            <Button variant="contained" color="secondary">Estoque</Button>
            <Switch
                onChange={changeTheme}
                name="loading"
                color="secondary"
            />
            </div>
            
        </Header>
        
        
   </Container>
   
  );
}

export default StorePage;