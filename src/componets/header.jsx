import styled, {createGlobalStyle} from 'styled-components';
import Fotos from '../pages/Fotos';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import {BrowserRouter as  Router, Link } from 'react-router-dom';
import Pesquisa from './pesquisar';

const Menu = styled.nav`
 bottom: 30px;
    top:0px;
    position: sticky;
    font-size: 30px;
font-family: verdana;
background-color: darkslateblue;

width: 100%;

ul{
    border-bottom: 2px solid gold;
    padding: 5px;
    margin-top: 0px;
    float:top;
    gap: 50px;
    width: 100%;
    height: 70px;
  align-items: center;
    list-style-type: none;
    background-color: darkslateblue;
    display:flex;
    justify-content:space-evenly;
}

ul a{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
   color: yellow;
   text-decoration: none;

}

`;


function Header () {
   
    return (
       
          <Menu>
            <Pesquisa/>
        <ul>
           <li><Link to= '/Home'>Home</Link></li>
           <li><Link to= '/Profile'>Profile</Link></li>
           <li><Link to= '/Fotos'>Fotos</Link></li>
           
       </ul>
       </Menu>
       
   
    );
};
export default Header;
