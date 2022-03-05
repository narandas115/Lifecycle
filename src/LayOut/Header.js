import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
    let word="Webskitters"
    return (
        <div>
            <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to ="/">Home</Navbar.Brand> {/*Default path setup*/}
            <Nav className="me-auto">
            <Nav.Link as={Link} to ="/about_page">About</Nav.Link>
            <Nav.Link as={Link} to ={`/contact_page/${word}`}>Contact</Nav.Link>
            <Nav.Link as={Link} to ="/feedback_page">Feedback</Nav.Link>
            <Nav.Link as={Link} to ="/p_catagory">Product</Nav.Link>
            </Nav>
            </Container>
            </Navbar>
        </div>
    )
}
