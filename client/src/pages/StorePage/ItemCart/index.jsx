import React from "react";
import {Buttons, Container, ProductInfo} from './styles';
import { IconButton,Button, Tooltip } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const ItemCart=({name,price,id,qty,sumUp,decrease,remove,setCart,setQty})=>{
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
                <IconButton>
                    <RemoveCircleIcon  onClick={()=>decrease(id)} />
                </IconButton>
            </Tooltip>
            <input value={qty} onChange={(e)=>setQty(id,e.target.value)}/>
            <Tooltip title="Add" >
                <IconButton>
                    <AddCircleIcon onClick={()=>sumUp(id)}/>
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