import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Section from "./components/section/section.jsx"
import Products from './components/products/products.jsx'
import item1 from "./assets/item1.png"
import item2 from "./assets/item2.png"
import item3 from "./assets/item3.png"
import styled from "styled-components";

const ProductsFlex = styled.div`
  display: flex;
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Section title={"CLIENTE +"} cardName={"promo"}/>
    <ProductsFlex>
      <Products produtoImg={item1} productTitle={"Item 1"} productDesc={"1Kg/Preço"} productPrice={"R$ 000.000"}/>
      <Products produtoImg={item2} productTitle={"Item 2"} productDesc={"1Kg/Preço"} productPrice={"R$ 000.000"}/>
      <Products produtoImg={item3} productTitle={"Item 3"} productDesc={"1Kg/Preço"} productPrice={"R$ 000.000"}/>
    </ProductsFlex>

    <Section title={"OUTROS"} cardName={"saudável"}/>
    <ProductsFlex>
      <Products produtoImg={item1} productTitle={"Item 1"} productDesc={"1Kg/Preço"} productPrice={"R$ 000.000"}/>
      <Products produtoImg={item2} productTitle={"Item 2"} productDesc={"1Kg/Preço"} productPrice={"R$ 000.000"}/>
      <Products produtoImg={item3} productTitle={"Item 3"} productDesc={"1Kg/Preço"} productPrice={"R$ 000.000"}/>
    </ProductsFlex>
  </StrictMode>,
)
