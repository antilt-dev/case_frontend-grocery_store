import React from "react";
import {Container, Head, StockList} from './styles'
import Header from '../../components/Header'
import { goHome } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useRequestData from '../../hooks/useRequestData'
import ProductCard from "./ProductCard";
import {url} from '../../BaseURL/BASE_URL'
import { SpinnerCircularSplit	 } from 'spinners-react';

const StockPage=()=>{
  const navigate = useNavigate()

  const [data,isLoading,error] = useRequestData(`${url}/products`)
  
  const renderProductList = data?.map((item)=>{
    return <ProductCard name={item.name} stock={item.qty_stock} key={item.id}/>
  })

  return (
   <Container>
      <Header  buttonChildren="Loja" onClickNavigate={()=>goHome(navigate)}/>
      <StockList>
        <Head>
          <h1>ESTOQUE</h1>
          <div>
            <p>Produto</p>
            <p>Quantidade</p>
          </div>
        </Head>
        {isLoading && !error && <SpinnerCircularSplit/>}
        {error && <p>Erro ao carregar os produtos.</p>}
        {renderProductList}
      </StockList>

   </Container>
  );
}

export default StockPage;