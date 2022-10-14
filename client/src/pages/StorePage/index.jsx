import React, { useContext, useEffect, useState } from "react";
import {Cart, ClientForm, Container, ProductsList, Sidebar} from './styles'
import logo from '../../assets/shopper-logo.png'
import { Button, Switch  } from "@mui/material";
import useRequestData from "../../hooks/useRequestData";
import { url } from "../../BaseURL/BASE_URL";
import ProductCard from "./ProductCard";
import ErrorModal from "../../components/ErrorModal";
import GlobalContext from "../../contexts/GlobalContext";
import Header from "../../components/Header";
import ItemCart from "./ItemCart";






const StorePage=()=>{
    const [data,isLoading,error] = useRequestData(`${url}/products`)
    
    const {setOpenModalError,cart,setCart} = useContext(GlobalContext)
  

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

    const decreaseProduct  = (id) =>{
        
        let newCart = cart.map((product)=>{
            if(product.id === id){
                product.units-=1 
                return product
            }else{
                return product
            };  
         })
         newCart = newCart.filter((product)=>{
             return product.units > 0
         })
         setCart(newCart)
    }

    const removeProduct = (id)=>{
        const newCart = cart.filter((product)=>{
            return product.id !== id
        })

        setCart(newCart)
    }

    const addNewProductCart = (id)=>{
        const product = data.filter((item)=> item.id === id)
        
        const newProductCart = {
            name: product[0].name,
            units:1,
            price:product[0].price,
            id
        }
        setCart([...cart,newProductCart])
    }

    const setManualQty = (id,qty) =>{
        
        let productStock = data.filter((product)=>{
            if(product.id === id){
                return product
            }
        })
        productStock = productStock[0].qty_stock
        
        const newCart = cart.map((item)=>{   
            if(item.id === id && qty > productStock){
                setOpenModalError(true)

            }

            if(item.id === id && qty <= productStock){
                item.units = qty
                return item
            }else{
                return item
            }
        })
        setCart(newCart)
    }

    const onClickAddProduct = (id) =>{
        const checkCart = cart.find((product)=>{
            return product.id === id 
        })

        checkCart?sumUpProduct(id):addNewProductCart(id)   
        
    }
  

    const productsRender = data?.map((item)=>{
        return <ProductCard 
                name={item.name} 
                price={item.price} 
                key={item.id} 
                id={item.id} 
                onClick={onClickAddProduct}
                />
    })

    const cartRender = cart.map((item)=>{
        return <ItemCart 
                key={item.id} 
                id={item.id}
                name={item.name} 
                price={item.price} 
                qty={item.units} 
                sumUp={sumUpProduct}
                decrease={decreaseProduct}
                remove={removeProduct}
                setQty={setManualQty}
                />

    })
    
   
  return (
    
   <Container>
        <Header buttonChildren="Estoque"/>
        <ErrorModal/>
        <ProductsList>
            {productsRender}
        </ProductsList>
        <Sidebar>
            <Cart>
                <ClientForm>
                
                </ClientForm>
                {cartRender}
                    
               
            </Cart>
        </Sidebar>
        
        
   </Container>
   
  );
}

export default StorePage;