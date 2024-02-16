import React from 'react';
import { Container, Row, Col, Image,Button,section,Card,Nav} from 'react-bootstrap';
import { ArrowRightShort, StarFill} from 'react-bootstrap-icons';
import PetCloths from './PetCloths.js';
import PetFood from './PetFood.js';
import Product from './Product.js';
import Forms from './Forms.js';
import Blog from './Blog.js';
import Offers from './offers.js';
import Scroll from './Scroll.js';
import Footer from './Footer.js';

const Home=()=>{
	return(
		<>
			<section>
			<Container fluid className="container1">
				<Row>
					<Col>
						<Image src="dog.jpg"></Image>
					</Col>
					<Col className="text">
						<p className="color1 p1">SAVE 10-20 % OFF </p>
						<h1 className="h11"> Best <br/>Destination For <br/><span className="color1"> Your Pets </span></h1>
						<Button variant="outline-secondary" className="button1 button2">SHOP NOW<ArrowRightShort/></Button>
					</Col>
				</Row>
			</Container>
			</section>

			<section>
				<Container fluid>
					<br/><br/><br/><br/>
					<Row className="service1">
						<Col className="service">
							<Nav.Link href="#"><Image src="1.jpg"></Image></Nav.Link>
						</Col>
						<Col className="service">
							<Nav.Link href="#"><Image src="2.jpg"></Image></Nav.Link>
						</Col>
						<Col className="service">
							<Nav.Link href="#"><Image src="3.jpg"></Image></Nav.Link>
						</Col>
						<Col className="service">
							<Nav.Link href="#"><Image src="4.jpg"></Image></Nav.Link>
						</Col>
						<Col className="service">
							<Nav.Link href="#"><Image src="5.jpg"></Image></Nav.Link>
						</Col>
					</Row>
				</Container>
			</section>

			<section>
				<PetCloths></PetCloths>
			</section>

			<section>
				<PetFood/>
			</section>

			<section>
				<Container fluid className="container1">
					<Row>
						<Col className="text1">
							<p className="color1 p2">UPTO 40 % OFF </p>
							<h1 className="h11"> Clearance  <br/>Sale !!!<br/></h1>
							<Button variant="outline-secondary" className="button1 button2">SHOP NOW<ArrowRightShort/></Button>
						</Col>
						<Col>
							<Image src="dog1.jpg"></Image>
						</Col>
					</Row>
				</Container>
			</section>

			<section class="imgdiv">
				<Image src="t1.jpg" className="text-image"/>
			</section>

			<section>
				<Product/>
			</section>

			<section class="formdiv">
				<Forms/>
			</section>

			<section>
				<Blog/>
			</section>

			<section>
				<Offers/>
			</section>

			<section>
				<Scroll/>
			</section>

			<section>
				<Footer/>
			</section>
			
		</>
	);
};
export default Home;