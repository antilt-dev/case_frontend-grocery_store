import React,{useState} from "react";
import {Container} from './styles'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorePage from "../../pages/StorePage";
import StockPage from "../../pages/StockPage";
import {light,dark} from '../../styles/themes';
import { ThemeProvider  } from "@mui/material/styles";
import GlobalContext from "../../contexts/GlobalContext";




const Router=()=>{
    const [darkmode,setDarkmode] = useState(false)
    const [openModalError,setOpenModalError] = useState(false)
    const [cart,setCart] = useState([])

  return (
   <Container>
        <GlobalContext.Provider value={{darkmode,
            setDarkmode,
            openModalError,
            setOpenModalError,
            cart,
            setCart
            }}>
            <ThemeProvider theme={darkmode?dark:light}>
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