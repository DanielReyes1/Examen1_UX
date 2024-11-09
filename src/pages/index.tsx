import Image from "next/image";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Navbar, Nav, Collapse, Dropdown } from 
'react-bootstrap';
import NavbarNetflix from "./navbar";




export default function Home() {
  return (
    <>
      <link rel="icon" href="favicon.ico"/>
      <NavbarNetflix/>
    </>
  );
}
