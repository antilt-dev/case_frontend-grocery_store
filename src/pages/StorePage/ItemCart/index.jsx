import React from "react";
import {Buttons, Container, ProductInfo} from './styles';
import { IconButton,Button, Tooltip } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const ItemCart=({name,price,id,qty,sumUp,decrease,remove,setQty})=>{
    const formatedPrice = price.toString().split(".").join(",")
  return (
   <Container>
        <ProductInfo>
            <p>{name}</p>
            <span>R$ {formatedPrice}</span>
        </ProductInfo>
       
        <Buttons>
            <div>
            <Tooltip title="Remove" >
                <IconButton onClick={()=>decrease(id)} >
                    <RemoveCircleIcon  />
                </IconButton>
            </Tooltip>
            <input value={qty} onChange={(e)=>setQty(id,e.target.value)}/>
            <Tooltip title="Add" >
                <IconButton onClick={()=>sumUp(id)}>
                    <AddCircleIcon />
                </IconButton>
            </Tooltip>
            </div>
            <Tooltip title="Excluir" arrow color="error">
                <Button onClick={()=>remove(id)}>Excluir</Button>
            </Tooltip>
        </Buttons>
            
        

   </Container>
  );
}

export default ItemCart;