import Image from "next/image";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Navbar, Nav, Collapse, Dropdown } from 
'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import NavbarNetflix from "./navbar";
//import Carrusel from "./Carrusel";
import CardSlider from "./CardSlider";
import Slider from "react-slick";
import Billboard from "./billboard";
import { useState } from "react";
/*interface Deslizante{
  titulo:string;
  img1:string;
  img2:string;
  img3:string;
  img4:string;
  img5:string;
  img6:string;
  img7:string;
  img8:string;
  img9:string;
  img10:string;
  img11:string;
  img12:string;
}
*/
export default function Home() {
  /*const [deslizante,setdeslizante]=useState<Deslizante[]>([
    {
      titulo:"Series de EE.UU. dobladas al español",
      img1:"/img/us1.jpg",
      img2:"/img/us2.jpg",
      img3:"/img/us3.jpg",
      img4:"/img/us4.jpg",
      img5:"/img/us5.jpg",
      img6:"/img/us6.jpg",
      img7:"/img/us7.jpg",
      img8:"/img/us8.jpg",
      img9:"/img/us9.jpg",
      img10:"/img/us10.jpg",
      img11:"/img/us11.jpg",
      img12:"/img/us12.jpg",

    },
  ]);*/
  return (
    <>
      <link rel="icon" href="favicon.ico"/>
      <NavbarNetflix/>
      <Billboard/>
      <CardSlider titulo="Continuar Viendo" img1="/img/continuar1.jpg" img2="/img/continuar2.jpg" img3="/img/continuar3.jpg"img4="/img/continuar4.jpg"img5="/img/continuar5.jpg"img6="/img/continuar6.jpg"img7="/img/continuar7.jpg"img8="/img/continuar8.jpg"img9="/img/continuar9.jpg"img10="/img/continuar10.jpg"img11="/img/continuar11.jpg"img12="/img/continuar12.jpg" barra="confirmado"/>
      <CardSlider titulo="Series de EE.UU. dobladas al español" img1="/img/us1.jpg" img2="/img/us2.jpg" img3="/img/us3.jpg"img4="/img/us4.jpg"img5="/img/us5.jpg"img6="/img/us6.jpg"img7="/img/us7.jpg"img8="/img/us8.jpg"img9="/img/us9.jpg"img10="/img/us10.jpg"img11="/img/us11.jpg"img12="/img/us12.jpg" barra=""/>
      <CardSlider titulo="Anime" img1="/img/anime1.jpg" img2="/img/anime2.jpg" img3="/img/anime3.jpg"img4="/img/anime4.jpg"img5="/img/anime5.jpg"img6="/img/anime6.jpg"img7="/img/anime7.jpg"img8="/img/anime8.jpg"img9="/img/anime9.jpg"img10="/img/anime10.jpg"img11="/img/anime11.jpg"img12="/img/anime12.jpg" barra=""/>
      <CardSlider titulo="Favoritos familiares" img1="/img/familiar1.jpg" img2="/img/familiar2.jpg" img3="/img/familiar3.jpg"img4="/img/familiar4.jpg"img5="/img/familiar5.jpg"img6="/img/familiar6.jpg"img7="/img/familiar7.jpg"img8="/img/familiar8.jpg"img9="/img/familiar9.jpg"img10="/img/familiar10.jpg"img11="/img/familiar11.jpg"img12="/img/familiar12.jpg" barra=""/>
      <CardSlider titulo="Solo en Netflix" img1="/img/solo1.jpg" img2="/img/solo2.jpg" img3="/img/solo3.jpg"img4="/img/solo4.jpg"img5="/img/solo5.jpg"img6="/img/solo6.jpg"img7="/img/solo7.jpg"img8="/img/solo8.jpg"img9="/img/solo9.jpg"img10="/img/solo10.jpg"img11="/img/solo11.jpg"img12="/img/solo12.jpg" barra=""/>
      <CardSlider titulo="Películas de Comedia" img1="/img/comedia1.jpg" img2="/img/comedia2.jpg" img3="/img/comedia3.jpg"img4="/img/comedia4.jpg"img5="/img/comedia5.jpg"img6="/img/comedia6.jpg"img7="/img/comedia7.jpg"img8="/img/comedia8.jpg"img9="/img/comedia9.jpg"img10="/img/comedia10.jpg"img11="/img/comedia11.jpg"img12="/img/comedia12.jpg" barra=""/>
      <footer>© 1997-2024 Netflix, Inc.</footer>
    </>
  );
}
