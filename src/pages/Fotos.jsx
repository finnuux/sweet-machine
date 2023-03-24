import Header from "../componets/header"; 
import styled, {createGlobalStyle} from 'styled-components';


const Slider = styled.div`
   margin:0 auto;
  display: flex;
    width: 500px;
height: 500px;
overflow: hidden;

&:manual-navigation{
    position:absolute;
    width: 500px;
    margin-top: -40px;
    display:flex;
    justify-content: center;

}
&.manual-btn{
    border: 2px solid red;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
}
;

&.manual-btn:not(:lost-child){
    margin-right: 40px;
}
&.manual-btn:hover{
    background-color: blue;
}

`;

const Slides = styled.div`
width: 400%;
height: 400px;
display: flex;
   

img{
    width:400px;
}

`
;

/*
let count = 1;
Document.getElementById('radio1').check = true;

setInterval(function(){
nextImage();
}, 2000)

function nextImage(){
count++;
if(count>4){
count=1;
}
Document.getElementById('radio'+count).checked = true;
};
 */

function Fotos(){
    
    return(
        <>
        <Slider>

    <input type="radio" name= 'radio-btn' id = 'radio1'/>
    <input type="radio" name= 'radio-btn' id = 'radio2'/>
    <input type="radio" name= 'radio-btn' id = 'radio3'/>
    <input type="radio" name= 'radio-btn' id = 'radio4'/>
    <Slides>
<img src="https://media.lelombrik.net/t/38570cd2b3ca5c4c19605a9cab27b920/p/01.png" alt="image1"></img>
    </Slides>
    <Slides>
<img src="https://media.lelombrik.net/t/38570cd2b3ca5c4c19605a9cab27b920/p/01.png" alt="image1"></img>
    </Slides>
    <Slides>
<img src="https://media.lelombrik.net/t/38570cd2b3ca5c4c19605a9cab27b920/p/01.png" alt="image1"></img>
</Slides>
<Slides>
<img src="https://media.lelombrik.net/t/38570cd2b3ca5c4c19605a9cab27b920/p/01.png" alt="image1"></img>
</Slides>

</Slider>
</>
    );
};


export default Fotos;