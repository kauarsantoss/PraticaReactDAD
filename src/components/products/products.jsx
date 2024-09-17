import styled from "styled-components";
import SacolaImg from "../../assets/sacola.svg"

const Divona = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap');
    font-family: "Mulish", sans-serif;
    display: flex;
    margin: 50px;
`

const Produto = styled.div`
    display: flex;
    width: 364px;
    height: 117px;
    box-shadow: 0px 1.5px 8px #c7c7c7, -5px -5px 10px #f9f9f9;
    border-radius: 8px;
    
`

const Imagem = styled.img`
    display: flex;
    margin: 20px;
    width: 80px;
    height: 60px;
`

const Sacola = styled.div `
display: flex;
    width: 32px;
    height: 32px;
    background-color: #FF0000;
    border-radius: 100px;
    margin-top: 75px;
    margin-left: 100px;
    justify-content: center;
    align-items: center;
    img {
        display: flex;
        align-items: center;
    }
`

const Infos = styled.div `
    display: flex;
`

const Desc = styled.div`
    margin-top: 64px;
    margin-left: -88px;
`

const Price = styled.div`
    color: #FF0000;
    font-weight: 700;
    margin-top: 90px;
    margin-left: -63px;
`

export default function Products({produtoImg, productTitle, productDesc, productPrice}) {
    return (
        <Divona>
            <Produto>
                <Imagem src={produtoImg} alt="" />
                <Infos>
                    <h1>{productTitle}</h1>
                    <Desc>{productDesc}</Desc>
                    <Price>{productPrice}</Price>
                </Infos>
                <Sacola>
                    <img src={SacolaImg} alt="" />
                </Sacola>
            </Produto>
        </Divona>
    );
  }