import styled from "styled-components";

const Buscar = styled.input`
height: 30px;
width: 40%;
border: solid darkgreen;
border-radius: 10px;
box-shadow: -10px 10px 10px black;

`;
const BtnBusca = styled.button`
background-color: gold;
border: solid darkgreen;
height: 30px;
border-radius: 10px;
margin-left: 10px;
color: blue;
font-family: Verdana, Geneva, Tahoma, sans-serif;
box-shadow: -10px 10px 10px black;
`;


function Pesquisa(){

    return(
        <>
        <center>
        <Buscar type="text" id="txtBusca" placeholder="Buscar..."/>
  <BtnBusca>Buscar</BtnBusca>
  </center>
        </>
    );
};


export default Pesquisa;