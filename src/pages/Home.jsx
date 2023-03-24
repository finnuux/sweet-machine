//import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import './App.css';
import styled, {createGlobalStyle} from 'styled-components';
import Fotos from './Fotos';
import Profile from './Profile';

import Header from '../componets/header';


/*const Menu = styled.div`{
  position: fixed;
  float: left;
  background-color: darkslateblue;
  width: 20%;
  height: 100vh;

}`;*/

const Title = styled.h3`
color: gold;
background-color: darkgreen;
border: none;
font-size: 30px;
box-shadow: -10px 10px 10px black;
border: darkgoldenrod
 solid 0.1px;
padding:  5px;
border-radius: 10px;
`;

const Conteudo1 = styled.div`
  align-items: center;
  overflow: hidden;
  background-color: beige;
  height: 300px;
  width: 70%;
  border: silver solid 1px;
  margin: auto;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: -10px 10px 10px black;

`;

function Home(){
    return(
       <div>
     
      
     <Conteudo1>
       <Title>Sweet Machine</Title>
     <h3>Uma  marca que busca o aprimoramento e desenvolvimento de softwares
       de IA  para maquinas de todos os gostos2
     </h3>
     </Conteudo1>
     
     <Conteudo1>
       <Title>Projetos</Title>
      
     </Conteudo1>
     <Conteudo1>
       <Title>Fotos e Artes</Title>
       
       </Conteudo1>    </div>
       
       
       );
     }
    


export default Home;