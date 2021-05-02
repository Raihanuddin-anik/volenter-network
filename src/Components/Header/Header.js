import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
        <Navbar  expand="lg">
            <Navbar.Brand href="#home">
                <img className="w-50" src="https://i.ibb.co/RvFtmYB/Group-1329.png"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link className="ms-5" style={{color:"black"}} href="#home">Home</Nav.Link>
                    <Nav.Link className="ms-5" style={{color:"black"}} href="#link">Donate</Nav.Link>
                    <Nav.Link className="ms-5" style={{color:"black"}} href="#link">Event</Nav.Link>
                    <Nav.Link className="ms-5" style={{color:"black"}} href="#link">Blog</Nav.Link>
                    <Nav.Link className="btn btn-primary ms-5 ps-5 pe-5 text-white " href="#link">Register</Nav.Link>
                    <Link to="/admin" className="btn btn-secondary ms-5 ps-4 pe-4 text-white" href="#link">Admin</Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar></div>
        
    );
};

export default Header;