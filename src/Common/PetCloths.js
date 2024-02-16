import React from 'react';
import { Container, Row, Col, Image,Button,section,Card,Nav} from 'react-bootstrap';
import { ArrowRightShort, StarFill} from 'react-bootstrap-icons';

const PetCloths=()=>{
	return(
		<>
			<section className="section3">
				<Container fluid className="custom-class">
					<br/><br/><br/><br/>
					<Row>
						<Col className="clothing">
							<h2 className="h22">Pet Clothing</h2>
						</Col>
						<Col className="shop">
							<Button variant="outline-secondary" className="button1 button2">SHOP NOW<ArrowRightShort/></Button>
						</Col>
					</Row>
					<br/>
					<Row className="row2">
						<Card style={{ width: '18rem' }} className="cards card1">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="p1.jpg" />
        						<Card.Title className="title">Gray Hoodie</Card.Title>
        						<Card.Text>
        							<StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/>5.0<br/>
          							$18.00
          						</Card.Text>
       						 	<Button variant="outline-secondary" className="button1">ADD TO CART</Button>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }} className="cards">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="p2.jpg" />
        						<Card.Title className="title">Gray Hoodie</Card.Title>
        						<Card.Text>
        							<StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/>5.0<br/>
          							$18.00
          						</Card.Text>
       						 	<Button variant="outline-secondary" className="button1">ADD TO CART</Button>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }} className="cards">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="p3.jpg" />
        						<Card.Title className="title">Gray Hoodie</Card.Title>
        						<Card.Text>
        							<StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/>5.0<br/>
          							$18.00
          						</Card.Text>
       						 	<Button variant="outline-secondary" className="button1">ADD TO CART</Button>
							</Card.Body>
						</Card>
						<Card style={{ width: '18rem' }} className="cards">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="p4.jpg" />
        						<Card.Title className="title">Gray Hoodie</Card.Title>
        						<Card.Text>
        							<StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/>5.0<br/>
          							$18.00
          						</Card.Text>
       						 	<Button variant="outline-secondary" className="button1">ADD TO CART</Button>
							</Card.Body>
						</Card>
					</Row>
				</Container>
			</section>
		</>
	)
};

export default PetCloths;