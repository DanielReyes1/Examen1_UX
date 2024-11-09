import Image from "next/image";
import localFont from "next/font/local";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container,Navbar, Nav } from 
'react-bootstrap';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});




export default function Home() {
  return (
    <>
    <link rel="icon" href="favicon.ico" />
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Logo"
              src="/img/Logo-Netflix.png"
              width="100"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#home"style={{color: "rgb(255,255,255)"}}><b>Home</b></Nav.Link>
            <Nav.Link href="#tv"className="nav-link-white">TV Shows</Nav.Link>
            <Nav.Link href="#movies"className="nav-link-white">Movies</Nav.Link>
            <Nav.Link href="#new"className="nav-link-white">New & Popular</Nav.Link>
            <Nav.Link href="#list"className="nav-link-white">My List</Nav.Link>
            <Nav.Link href="#browse"className="nav-link-white">Browse by Languages</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
          <img alt="Lupa" src="/img/lupa.png" width="40" height="40"></img>
          <Nav.Link href="#kids" style={{color: "rgb(255,255,255)"}}>Kids</Nav.Link>
          <img alt="Bell" src="/img/campana.png" width="50" height="50"></img>
          <img alt="User" src="/img/avatar.jpg" width="40" height="40"></img>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
