import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Scroll = () => {
    return (
        <>
            <section className="section11">
                <Container fluid className="custom-class">
                    <br/><br/><br/><br/>
                    <Row className="rows">
                        <Col className="custom-col">
                            <Image src='insta1.jpg' className="custom-col"></Image>
                        </Col>
                        <Col className="custom-col">
                            <Image src='insta2.jpg' className="custom-col"></Image>
                        </Col>
                        <Col className="custom-col">
                            <Image src='insta3.jpg' className="custom-col"></Image>
                        </Col>
                        <Col className="custom-col">
                            <Image src='insta4.jpg' className="custom-col"></Image>
                        </Col>
                        <Col className="custom-col">
                            <Image src='insta5.jpg' className="custom-col"></Image>
                        </Col>
                        <Col className="custom-col">
                            <Image src='insta6.jpg' className="custom-col"></Image>
                        </Col>    
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Scroll;
