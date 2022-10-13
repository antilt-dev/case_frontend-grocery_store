import React, { useContext, useState } from "react";
import {Container, Header} from './styles'
import logo from '../../assets/shopper-logo.png'
import { Button, Switch  } from "@mui/material";
import useRequestData from "../../hooks/useRequestData";
import { url } from "../../BaseURL/BASE_URL";
import ProductCard from "./ProductCard";
import ErrorModal from "../../components/ErrorModal";
import GlobalContext from "../../contexts/GlobalContext";






const StorePage=()=>{
    const [data,isLoading,error] = useRequestData(`${url}/products`)
    const [cart,setCart] = useState([])
    const {setOpenModalError} = useContext(GlobalContext)
    
    const sumUpProduct = (id) =>{
        
        let productStock = data.filter((product)=>{
            if(product.id === id){
                return product
            }
        })
        productStock = productStock[0].qty_stock
        
        const newCart = cart.map((item)=>{   
            if(item.units >= productStock){
                setOpenModalError(true)
            }

            if(item.id === id){
                item.units++
                return item
            }else{
                return item
            }
        })
        setCart(newCart)
    }

    const addNewProductCart = (id)=>{
        const product = data.filter((item)=> item.id === id)
        if(product.qty_stock < 1){
            throw new Error('Este produto não está mais disponível no estoque.')
        }
        const newProductCart = {
            name: product[0].name,
            units:1,
            price:product[0].price,
            id
        }
        setCart([...cart,newProductCart])
    }

    const onClickAddProduct = (id) =>{
        const checkCart = cart.find((product)=>{
            return product.id === id 
        })
        checkCart?sumUpProduct(id):addNewProductCart(id)   
        
    }
  

    const productsRender = data?.map((item)=>{
        return <ProductCard name={item.name} price={item.price} key={item.id} id={item.id} onClick={onClickAddProduct}/>
    })
    
   
  return (
    
   <Container>
        
        <Header>
            <img src={logo} alt="logo shopper"/>
            <div>
                <Button variant="contained" color="secondary">Estoque</Button>
                <Switch name="loading" color="secondary"/>
            </div>   
        </Header>
        <ErrorModal/>
        {productsRender}
        
   </Container>
   
  );
}

export default StorePage;