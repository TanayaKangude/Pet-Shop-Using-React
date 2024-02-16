import React from 'react';
import { Container, Row, Col, Image,Button,section,Card,Nav,Navbar} from 'react-bootstrap';
import { ArrowRightShort, StarFill} from 'react-bootstrap-icons';

const Offers=()=>{
	return(
		<>
			<section className="section4">
				<Container fluid className="custom-class">
					<br/><br/><br/><br/>
					<Row className="rows">
						<Card style={{ width: '18rem' }} className="cards card1">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="cart.svg" className="cardimage"/>
        						<Card.Title className="title"><h3>Free Delivery</h3></Card.Title>
        						<Card.Text>
        							<p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          						</Card.Text>
       						 </Card.Body>
						</Card>
						<Card style={{ width: '18rem' }} className="cards">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="user.svg" className="cardimage" />
        						<Card.Title className="title"><h3>100% Secure Payment</h3></Card.Title>
        						<Card.Text>
        							<p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          						</Card.Text>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }} className="cards">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="offer.svg" className="cardimage" />
        						<Card.Title className="title"><h3>Daily Offer</h3></Card.Title>
        						<Card.Text>
        							<p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          						</Card.Text>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }} className="cards">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="certificate.svg" className="cardimage"/>
        						<Card.Title className="title"><h3>Quality Guarantee</h3></Card.Title>
        						<Card.Text>
        							<p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          						</Card.Text>
							</Card.Body>
						</Card>
					
					</Row>
				</Container>
			</section>
		</>
	)
};

export default Offers;