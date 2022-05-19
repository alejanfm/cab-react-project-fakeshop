import React from "react";
import { Container, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

function Menu(props) {
    const handleChange = props.handleChange


    return (


        <Navbar bg="light" expand="lg">

        <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                    <img alt="React Fakeshop" src="/afm.svg" width="30" height="30" className="d-inline-block align-top" />{' '}</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/shop"><Nav.Link>Shop</Nav.Link></LinkContainer>
            <LinkContainer to="/chat"><Nav.Link>Chat</Nav.Link></LinkContainer>
            <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
            <LinkContainer to="/login"><Nav.Link>Login/Register</Nav.Link></LinkContainer>
        </Nav>
        <Form className="d-flex">
            <FormControl
            type="search"
            placeholder="Search"
            className="minput-searchbar e-2"
            aria-label="Search"
            onChange={handleChange}
            />
        </Form>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    )
}

export default Menu;
