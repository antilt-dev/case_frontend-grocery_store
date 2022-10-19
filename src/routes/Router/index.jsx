import React from "react";
import {Container} from './styles'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorePage from "../../pages/StorePage";
import StockPage from "../../pages/StockPage";





const Router=()=>{
  return (
   <Container>   
        <BrowserRouter>
            <Routes>
                <Route index element={<StorePage/>}/>
                <Route path="/stock" element={<StockPage/>}/>
            </Routes>
        </BrowserRouter>
   </Container>
  );
}

export default Router;