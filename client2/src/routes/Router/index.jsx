import React from "react";
import {Container} from './styles'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorePage from "../../pages/StorePage";
import StockPage from "../../pages/StockPage";
import {light,dark} from '../../styles/themes';
import { ThemeProvider  } from "@mui/material/styles";
import { tableFooterClasses } from "@mui/material";



const Router=()=>{
    const darkmode = false
  return (
   <Container>
        <ThemeProvider theme={darkmode?dark:light}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<StorePage/>}/>
                    <Route path="/stock" element={<StockPage/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
   </Container>
  );
}

export default Router;