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


export default function Home() {
  return (
    <>
      <link rel="icon" href="favicon.ico"/>
      <NavbarNetflix/>
      <Billboard/>
      <CardSlider/>
      <footer>© 1997-2024 Netflix, Inc.</footer>
    </>
  );
}
