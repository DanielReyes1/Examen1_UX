import Image from "next/image";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Navbar, Nav, Collapse, Dropdown } from 
'react-bootstrap';
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
      <CardSlider titulo="Series de EE.UU. dobladas al español" img1="/img/us1.jpg" img2="/img/us2.jpg" img3="/img/us3.jpg"img4="/img/us4.jpg"img5="/img/us5.jpg"img6="/img/us6.jpg"img7="/img/us7.jpg"img8="/img/us8.jpg"img9="/img/us9.jpg"img10="/img/us10.jpg"img11="/img/us11.jpg"img12="/img/us12.jpg"/>
      <CardSlider titulo="Anime" img1="/img/anime1.jpg" img2="/img/anime2.jpg" img3="/img/anime3.jpg"img4="/img/anime4.jpg"img5="/img/anime5.jpg"img6="/img/anime6.jpg"img7="/img/anime7.jpg"img8="/img/anime8.jpg"img9="/img/anime9.jpg"img10="/img/anime10.jpg"img11="/img/anime11.jpg"img12="/img/anime12.jpg"/>
      <footer>© 1997-2024 Netflix, Inc.</footer>
    </>
  );
}
