import React from 'react';
import { Container, Row, Col, Image,Button,section,Card,Nav} from 'react-bootstrap';
import { ArrowRightShort, StarFill} from 'react-bootstrap-icons';

const Blog=()=>{
	return(
		<>
			<section className="section9">
				<Container fluid className="custom-class">
					<br/><br/><br/><br/>
					<Row>
						<Col xs={8} className="clothing">
							<h2 className="h22">Latest Blog Post</h2>
						</Col>
						<Col className="shop">
							<Button variant="outline-secondary" className="button1 button2">READ ALL<ArrowRightShort/></Button>
						</Col>
					</Row>
					<br/>
					<Row className="row2">
						<Card style={{ width: '25rem' }} className="cards card1">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="s1.jpg" />
        						<Card.Title className="title"><h3 className="h33">10 Reasons To Be Helpful Towards Any Animals</h3></Card.Title>
        						<Card.Text>
        							
        							<p className="alink">At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.</p>
          						</Card.Text>
       						 	<a href="#" className="alink">READ MORE</a>
							</Card.Body>
						</Card>
						<Card style={{ width: '25rem' }} className="cards">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="dog.jpg" className="cardimg" />
        						<Card.Title className="title"><h3 className="h33">How To Know Your Pet Is Hungry</h3></Card.Title>
        						<Card.Text>
        							<p className="alink">At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.</p>
          						</Card.Text>
       						 	<a href="#" className="alink">READ MORE</a>
							</Card.Body>
						</Card>
						<Card style={{ width: '25rem' }} className="cards">
							<Card.Body className="custom-card-body">
								<Card.Img variant="top" src="p4.jpg" className="cardimg1" />
        						<Card.Title className="title"><h3 className="h33">Best Home For Your Pets</h3></Card.Title>
        						<Card.Text>
        							<p className="alink">At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.</p>
          						</Card.Text>
       						 	<a href="#" className="alink">READ MORE</a>
							</Card.Body>
						</Card>
					</Row>
				</Container>
			</section>
		</>
	);
};
export default Blog;