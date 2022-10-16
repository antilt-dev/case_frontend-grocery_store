import React,{useState} from "react";
import {Container} from './styles'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorePage from "../../pages/StorePage";
import StockPage from "../../pages/StockPage";
import {light} from '../../styles/themes';
import { ThemeProvider  } from "@mui/material/styles";
import GlobalContext from "../../contexts/GlobalContext";




const Router=()=>{
    const [openModalError,setOpenModalError] = useState(false)
    const [openModalSucess, setOpenModalSucess] = useState(false)
    const [openModalFailed,setOpenModalFailed] = useState(false)
    const [cart,setCart] = useState([])

  return (
   <Container>
        <GlobalContext.Provider value={{
            cart,
            setCart,
            openModalError,
            setOpenModalError,
            openModalSucess, 
            setOpenModalSucess,
            openModalFailed,
            setOpenModalFailed
            }}>
            <ThemeProvider theme={light}>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<StorePage/>}/>
                        <Route path="/stock" element={<StockPage/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </GlobalContext.Provider>
   </Container>
  );
}

export default Router;