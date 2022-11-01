import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Cart, ClientForm, Container, ProductsList, Sidebar, Tools} from './styles'
import useRequestData from "../../hooks/useRequestData";
import { url } from "../../BaseURL/BASE_URL";
import ProductCard from "./ProductCard";
import GlobalContext from "../../contexts/GlobalContext";
import Header from "../../components/Header";
import ItemCart from "./ItemCart";
import { Button, IconButton, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { SpinnerCircularSplit	 } from 'spinners-react';
import { goStock } from "../../routes/coordinator";
import sendOrder from "../../services/sendOrder";
import SucessModal from "../../components/SucessModal";
import FailedModal from "../../components/FailedModal";
import ErrorModal from "../../components/ErrorModal";
import DarkSwitch from "../../components/DarkSwitch";





const StorePage=()=>{

    const navigate = useNavigate()

    const [data,isLoading,error] = useRequestData(`${url}/products/getAll`)
    const [cartUnits,setCartUnits] = useState(0)
    const [openCart,setOpenCart] = useState(false)
    const [cartPrice,setCartPrice] = useState(0)
    const [deliveryDate,setDeliveryDate] = useState("")
    const [userName,setUserName] = useState("")
    const [errorModal, setErrorModal] = useState("")
    const {setOpenModalError, 
            setOpenModalSucess,
            setOpenModalFailed,
            cart,
            setCart,
            darkMode
            } = useContext(GlobalContext)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{updateCart()},[cart])

//checks if the product exists in the cart and calls the appropriate function to add it to the cart
    const onClickAddProduct = (id) =>{
        const checkCart = cart.find((product)=>{
            return product.id === id 
        })

        checkCart?sumUpProduct(id):addNewProductCart(id)   
    }

//calculates quantity of items in cart
    const calculateQtyProductsCart = () =>{
       if(cart.length >0){
        let totalUnits = cart.map((product)=>{
            return product.units  
        })

        totalUnits = totalUnits.reduce((prev,curr)=> prev+curr)
        setCartUnits(totalUnits)
       }else{
        return 0
       }     
    }

//calculates price of items in cart    
    const calculetePriceCart = () =>{
        if(cart.length >0){
         let totalValue = cart.map((product)=>{
             return product.units * product.price 
         })
 
         totalValue = totalValue.reduce((prev,curr)=> prev+curr)
        setCartPrice(totalValue)
        }else{
         return 0
        }     
     }

//call for cart updates

const updateCart = () =>{
    calculetePriceCart()
    calculateQtyProductsCart()
}
//adds a new item to the cart
    const addNewProductCart = (id)=>{
        const product = data.filter((item)=> item.id === id)
        
        const newProductCart = {
            name: product[0].name,
            units:1,
            price:product[0].price,
            id
        }
        setCart([...cart,newProductCart])
        setOpenCart(true)
    }

//adds a unit to the cart item
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
        setOpenCart(true)
    }

//removes one unit of the item from the cart
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

//removes the product from the cart
    const removeProduct = (id)=>{
        const newCart = cart.filter((product)=>{
            return product.id !== id
        })

        setCart(newCart)
    }
 
//adds a user-selected quantity to the item
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

//clear Cart
    const clearCart = () =>{
        setCart([])
        setCartPrice(0)
        setCartUnits(0)
    }

//clear form

const clearForm = () =>{
    setUserName("")
    setDeliveryDate("")
}

//send place order to database
const onPlaceOrder = () => {
    const purchases = cart.map((item)=>{
        return{
            id:item.id,
            quantity:item.units
        }
    })
    const body = {
        name:userName,
        date:deliveryDate,
        purchaseItems:purchases

    }
    sendOrder(`${url}/purchases/`,body,setOpenModalSucess,setOpenModalFailed,setErrorModal)
    clearCart()
    clearForm()
    setOpenCart(false)
}


    const productsRenderList = data?.map((item)=>{
        return <ProductCard 
                name={item.name} 
                price={item.price} 
                key={item.id} 
                id={item.id} 
                onClick={onClickAddProduct}
                />
    })

    const cartRenderList = cart.map((item)=>{
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
            <Header 
                buttonChildren="Estoque"
                onClickNavigate={()=> goStock(navigate)}
                price={cartPrice}
                itemsCart={cartUnits}
                toggleCart={()=>setOpenCart(!openCart)}
            />
            
            <SucessModal/>
            <FailedModal error={errorModal}/>
            <ErrorModal/>
            <Tools>
                <DarkSwitch/>
            </Tools>
            <ProductsList>
                {isLoading && !error && <SpinnerCircularSplit/>}
                {error&& !data && <p>Erro ao carregar os produtos.</p>}
                {productsRenderList}
            </ProductsList>
            <Sidebar openCart={openCart}>
                <Cart>
                    <div>
                        <IconButton 
                            aria-label="close" 
                            onClick={()=>setOpenCart(!openCart)} 
                            sx={{color:darkMode?"white":"black"}}
                        >
                            <CloseIcon  />
                        </IconButton>
                        <h3>Seu Pedido</h3>
                    </div>
                    
                    <ClientForm>
                        <TextField
                            required
                            label="Nome"
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            focused
                            value={userName}
                            onChange={(e)=>setUserName(e.target.value)} 
                            inputProps={{sx:{color:darkMode?"white":"black"}}}
                        />
                        <TextField 
                            required 
                            label="Data da entrega"
                            variant="outlined"
                            type="date"
                            color="secondary"
                            fullWidth
                            focused
                            value={deliveryDate}
                            onChange={(e)=>setDeliveryDate(e.target.value)} 
                            InputLabelProps={{shrink: true}}
                            inputProps={{sx:{color:darkMode?"white":"black",colorScheme:darkMode?"dark":""}}}   
                        />
                    </ClientForm>

                    {cartRenderList}

                    <Button 
                        variant="contained" 
                        color="secondary" 
                        type="submit"
                        onClick={onPlaceOrder}
                        >Fechar Pedido
                    </Button>
                    <Button 
                        variant="filled" 
                        color="secondary" 
                        onClick={clearCart}
                        >
                        Limpar Carrinho</Button>
                </Cart>
            </Sidebar>
            
            
    </Container>
    
  );
}

export default StorePage;