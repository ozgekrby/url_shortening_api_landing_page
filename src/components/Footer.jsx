import React from 'react'
import { Row,Col, Nav, NavItem, NavLink } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

export default function Footer() {
  return (
    <div className='bg-black text-white'>
      <Row>
        <Col>
        <p>QuickLinks</p>
        </Col>
        <Col>
            <h5 className="mx-3">Useful Links</h5>
            <Nav vertical className="text-start">
              <NavItem>
                <NavLink href="/link1" className="text-white text-decoration-none">Link 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/link2" className="text-white text-decoration-none">Link 2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/link3" className="text-white text-decoration-none">Link 3</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/link4" className="text-white text-decoration-none">Link 4</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col>
            <h5 className="mx-3">Useful Links</h5>
            <Nav vertical className="text-start">
              <NavItem>
                <NavLink href="/link1" className="text-white text-decoration-none">Link 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/link2" className="text-white text-decoration-none">Link 2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/link3" className="text-white text-decoration-none">Link 3</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/link4" className="text-white text-decoration-none">Link 4</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col>
            <h5 className="mx-3">Useful Links</h5>
            <Nav vertical className="text-start">
              <NavItem>
                <NavLink href="/link1" className="text-white text-decoration-none">Link 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/link2" className="text-white text-decoration-none">Link 2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/link3" className="text-white text-decoration-none">Link 3</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/link4" className="text-white text-decoration-none">Link 4</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col className="text-center">
            <a href="https://www.facebook.com" className="text-white me-3">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.twitter.com" className="text-white me-3">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="https://www.pinterest.com" className="text-white me-3">
              <i className="fab fa-pinterest fa-2x"></i>
            </a>
            <a href="https://www.instagram.com" className="text-white">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </Col>
      </Row>
    </div>
  )
}
