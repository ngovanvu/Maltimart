import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'
import logofooter from '../../assets/images/logoFooter.png'
import '../../styles/footer.css'
const Footer = () => {
  return (
  <footer className='footer'>
    <Container>
      <Row>
        <Col lg ='3' sm='4'>
        <div className='footer__logo text-start'>
       <div className='footer__logo-img'>
       <img src={logofooter} alt = 'logo'/>
        <h5>Multimart</h5>
       </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!</p>
        </div>
        </Col>

        <Col lg ='3' sm = '4'>
        <h5 className='footer__title'>Top Categories</h5>
        <ListGroup className='top__categories-list'>
        <ListGroupItem className='top__categories-item border-0'>
        <p>Mobile Phones</p>
        <p>Modern Sofa</p>
        <p>Arm Chair</p>
        <p>Smart Watches</p>
        </ListGroupItem>
        </ListGroup>
        </Col>

        <Col lg ='3' sm = '4'>
        <h5 className='footer__title'>Useful Links</h5>
        <ListGroup className='top__categories-list'>
        <ListGroupItem className='top__categories-item border-0'>
        <p>Shop</p>
        <p>Cart</p>
        <p>Login</p>
        <p>Privacy Policy</p>
        </ListGroupItem>
        </ListGroup>
        </Col>

        <Col lg ='3' sm = '4'>
        <h5 className='footer__title'>Contact</h5>
        <ListGroup className='top__categories-list'>
        <ListGroupItem className='top__categories-item border-0'>
        <p className='d-flex align-items-center gap-1'><i class="ri-map-pin-line"></i> 123 ZindaBazar, Sylhet, Bangladesh</p>
        <p className='d-flex align-items-center gap-1'><i class="ri-mail-send-line"></i>+0881234567890</p>
        <p className='d-flex align-items-center gap-1'><i class="ri-phone-line"></i>Example123@gmail.com</p>
        </ListGroupItem>
        </ListGroup>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer
