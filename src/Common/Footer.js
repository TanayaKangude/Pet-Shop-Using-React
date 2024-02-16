import React from 'react';
import { Container, Row, Col, Image ,Nav,Form} from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <section className="section12">
                <Container className="custom-class">
                    <br/><br/><br/><br/>
                    <Row className="rows">
                        <Col className="custom-col">
                            <Image src='flogo.jpg' className="custom-col"></Image><br/>
                            <p className='p3'>Subscribe to our newsletter to get updates about our grand offers.</p>

                        </Col>
                        <Col className="custom-col">
                            <h3 className="h33">Quick Links</h3><br/>
                            <Nav.Link href="#" className='p3 a'>Home</Nav.Link>
                            <Nav.Link href="#" className='p3 a'>About us</Nav.Link>
                            <Nav.Link href="#" className='p3 a'>Offers</Nav.Link>
                            <Nav.Link href="#" className='p3 a'>Services</Nav.Link>
                            <Nav.Link href="#" className='p3 a'>Contact us</Nav.Link>
                        </Col>
                        <Col className="custom-col">
                            <h3 className="h33">Help Center</h3><br/>
                            <Nav.Link href="#" className='p3 a'>FAQs</Nav.Link>
                            <Nav.Link href="#" className='p3 a'>Payment</Nav.Link>
                            <Nav.Link href="#" className='p3 a'>Returns and Refunds</Nav.Link>
                            <Nav.Link href="#" className='p3 a'>Checkout</Nav.Link>
                            <Nav.Link href="#" className='p3 a'>Delivery Information</Nav.Link>
                        </Col>
                        <Col className="custom-col">
                            <h3 className="h33">Our Newsletter</h3><br/>
                            <p className='p3'>Subscribe to our newsletter to get updates about our grand offers.</p>
                            <Form.Control type="email" size="lg" placeholder="Enter your email here" />
                            <Image className="custom-col"></Image>
                        </Col>    
                    </Row>
                    <br/><br/><br/>
                    <hr/>
                    <p>© 2023 Waggy. All rights reserved.</p>
                </Container>
            </section>
        </>
    );
};

export default Footer;
