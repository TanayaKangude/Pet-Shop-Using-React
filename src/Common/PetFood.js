import React from 'react';
import { Container, Row, Col, Image,Button,section,Card,Nav,Navbar} from 'react-bootstrap';
import { ArrowRightShort, StarFill} from 'react-bootstrap-icons';

const PetFood=()=>{
	return(
		<>
			<section className="section4">
				<Container fluid className="custom-class">
					<br/><br/><br/><br/>
					<Row>
						<Col className="Food">
							<h2 className="h22">Pet Foodies</h2>
						</Col>
						<Col >
							<Navbar className="middle-nav">
								<Container>
									<Row>
										<Col className="menu one"><Nav.Link href="#all">All</Nav.Link></Col>
										<Col className="menu"><Nav.Link href="#cat">Cat</Nav.Link></Col>
										<Col className="menu"><Nav.Link href="#dog">Dog</Nav.Link></Col>
										<Col className="menu four"><Nav.Link href="#bird">Bird</Nav.Link></Col>
									</Row>
								</Container>
							</Navbar>
						</Col>
						<Col className="shop">
							<Button variant="outline-secondary" className="button1 button2">SHOP NOW<ArrowRightShort/></Button>
						</Col>
					</Row>
					<br/>
					<Row className="rows">
						<Card style={{ width: '18rem' }} className="cards card1">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="f1.jpg" />
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
								<Card.Img variant="top" src="f2.jpg" />
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
								<Card.Img variant="top" src="f3.jpg" />
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
								<Card.Img variant="top" src="f4.jpg" />
        						<Card.Title className="title">Gray Hoodie</Card.Title>
        						<Card.Text>
        							<StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/>5.0<br/>
          							$18.00
          						</Card.Text>
       						 	<Button variant="outline-secondary" className="button1">ADD TO CART</Button>
							</Card.Body>
						</Card>
					<Row className="rows">
						<Card style={{ width: '18rem' }} className="cards card1">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="f5.jpg" />
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
								<Card.Img variant="top" src="f6.jpg" />
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
								<Card.Img variant="top" src="f7.jpg" />
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
								<Card.Img variant="top" src="f8.jpg" />
        						<Card.Title className="title">Gray Hoodie</Card.Title>
        						<Card.Text>
        							<StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/><StarFill color="#DEAD6F"/>5.0<br/>
          							$18.00
          						</Card.Text>
       						 	<Button variant="outline-secondary" className="button1">ADD TO CART</Button>
							</Card.Body>
						</Card>
					</Row>
					</Row>
				</Container>
			</section>
		</>
	)
};

export default PetFood;