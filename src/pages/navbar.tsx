import React from "react"
import { Container,Navbar, Nav, Dropdown } from 
'react-bootstrap';
export const NavbarNetflix=()=>{
    return(
        
      <Navbar variant="dark" className="ms-0">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="Logo" src="/img/Logo-Netflix.png" width="95" height="55" className="d-inline-block align-top"/>{' '}
          </Navbar.Brand>
          <Nav className="me-auto d-none d-lg-flex">
            <Nav.Link href="#home" style={{ color: "rgb(255,255,255)", fontSize: "14px" }}><b>Home</b></Nav.Link>
            <Nav.Link href="#tv" className="nav-link-white">TV Shows</Nav.Link>
            <Nav.Link href="#movies" className="nav-link-white">Movies</Nav.Link>
            <Nav.Link href="#new" className="nav-link-white">New & Popular</Nav.Link>
            <Nav.Link href="#list" className="nav-link-white">My List</Nav.Link>
            <Nav.Link href="#browse" className="nav-link-white">Browse by Languages</Nav.Link>
          </Nav>
          <Dropdown className="d-lg-none">
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="bg-transparent border-0">
              <b style={{fontSize:"12px"}}>Browse</b>
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark" style={{backgroundColor:"rgb(10,10,10)",textAlign:"center"}}>
            <Dropdown.Item href="#home" className="drop-elemento">Home</Dropdown.Item>
            <Dropdown.Item href="#tv"className="drop-elemento">TV Shows</Dropdown.Item>
            <Dropdown.Item href="#movies"className="drop-elemento">Movies</Dropdown.Item>
            <Dropdown.Item href="#new"className="drop-elemento">New & Popular</Dropdown.Item>
            <Dropdown.Item href="#list"className="drop-elemento">My List</Dropdown.Item>
            <Dropdown.Item href="#browse" className="drop-elemento">Browse by Languages</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav className="ms-auto align-items-center">
          <img alt="Lupa" src="/img/lupa.png" width="40" height="40" />
          <Nav.Link href="#kids"className="d-none d-lg-block" style={{ color: "rgb(255,255,255)" }}>Kids</Nav.Link>
          <img alt="Bell" src="/img/campana.png" width="50" height="50" />
          <img alt="User" src="/img/avatar.jpg" width="40" height="40" />
        </Nav>
        </Container>
      </Navbar>
    );
}
export default NavbarNetflix;