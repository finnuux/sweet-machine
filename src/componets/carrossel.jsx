import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import styled from "styled-components";
import 'swiper/css';

/*const SlideItem = styled.SwiperSlide`{
    margin:10px;
}
SwiperSlide img{
    height:400px;
    width:200px;
    object-fit: 200%;
}
const Vic = styled.Swiper`
height:80vh;
   
  
`;
const  SwiperSlide1 =styled.SwiperSlide`
    margin:10px;  
&:img{
    height:200px;
    width:200px;
    object-fit: cover;}
`;*/


//PAR TE DA FUNÇAO CARROSSEL, RETIRADA PARA TESTES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/* <Vic>
<SwiperSlide1>
    <img src=''alt=""/>
</SwiperSlide1>

        </Vic> */


function Carrossel(){

    return(
        <>
       <Swiper>
<SwiperSlide style={ 'margin:10px;'} >
    <img src=''alt=""/>
</SwiperSlide >

        </Swiper> 
</>
    );
}

export default Carrossel;