import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import styled, {createGlobalStyle} from 'styled-components';
import Fotos from './pages/Fotos';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Header from './componets/header';
import Pesquisa from './componets/pesquisar';


function App() {
  
  return (
    
    
    <Router>
      
        <Header/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Fotos' element={<Fotos/>}/>
        </Routes>
        
        </Router>
        
  );}

    

export default App;
