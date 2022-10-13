import React, {useEffect, useState} from "react";
import {Container, Header} from './styles'
import logo from '../../assets/shopper-logo.png'
import { Button, Switch  } from "@mui/material";
import axios from 'axios';
import useRequestData from "../../hooks/useRequestData";
import { url } from "../../BaseURL/BASE_URL";
import ProductCard from "./productCard";






const StorePage=()=>{
    const [data,isLoading,error] = useRequestData(`${url}/products`)


  

    const productsRender = data?.map((item)=>{return <li key={item.id}>{item.name}</li>})
  
    
   
  return (
    
   <Container>
        
        <Header>
            <img src={logo} alt="logo shopper"/>
            <div>
            <Button variant="contained" color="secondary">Estoque</Button>
            <Switch
                // onChange={teste}
                name="loading"
                color="secondary"
            />
            </div>
            
        </Header>
        <ProductCard name="joao" price="15" imgLink="https://www.emperorskin.com/templates/default/images/product.png"/>
        
   </Container>
   
  );
}

export default StorePage;