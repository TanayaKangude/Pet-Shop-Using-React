import React from 'react';
import { Navbar,Nav, Container, Row, Col, Image,Form } from 'react-bootstrap';
import { Search, PersonFill, HeartFill, CartFill} from 'react-bootstrap-icons';
import {Outlet} from 'react-router-dom';

const MyNav = () => {
  return (
  	<>
    <Navbar>
      	<Container fluid className="my-custom-container">
        	<Row className="align-items-center">
          	<Col xs="auto" className="image">
            	<Image src="petlogo.jpg" />
          	</Col>
          	<Col xs={5}>
				<div class="col-sm-6 offset-sm-2 offset-md-0 col-lg-10 d-none d-lg-block">
          			<div class="search-bar border rounded-2 px-3 border-dark-subtle">
            			<form id="search-form" class="text-center d-flex align-items-center">
              				<input type="text" class="form-control border-0 bg-transparent" placeholder="Search for more than 10,000 products"/>
              				<Col xs="auto">
            					<Search />
          					</Col>
            			</form>
          			</div>
        		</div>
          	</Col>
          	
          	<Col xs="auto">
            	<p>Phone<br /><b>+980-<br />34984089</b></p>
          	</Col>
          	<Col xs="auto">
            	<p>Email<br /><b>Waggy@Gmail.Com</b></p>
          	</Col> 
          	<hr/>
			<Col xs={2} className="category">
				<Form.Group as={Row} className="mb-3" controlId="role">
        			<Col sm={{ span: 12 }}>
          				<Form.Select><option>Shop by Category</option>
          				<option>Cloth</option>
          				<option>Food</option>
          				<option>Toy</option>
          				</Form.Select>
        			</Col>
      			</Form.Group>
      		</Col>
			<Col xs="auto" className="menu"><Nav.Link href="home">Home</Nav.Link></Col>
			<Col xs="auto" className="menu"><Nav.Link href="pages">Pages</Nav.Link></Col>
			<Col xs="auto" className="menu"><Nav.Link href="shop">Shop</Nav.Link></Col>
			<Col xs="auto" className="menu"><Nav.Link href="blog">Blog</Nav.Link></Col>
			<Col xs="auto" className="menu"><Nav.Link href="contact">Contact</Nav.Link></Col>
			<Col xs="auto" className="menu"><Nav.Link href="other">Others</Nav.Link></Col>
			<Col xs="auto" className="menu"><Nav.Link href="getpro">Get Pro</Nav.Link></Col>
			<Col xs="auto" className="icon"><Nav.Link href="#"><PersonFill/></Nav.Link></Col>
			<Col xs="auto" className="icon1"><Nav.Link href="#"><HeartFill/></Nav.Link></Col>
			<Col xs="auto" className="icon1"><Nav.Link href="#"><CartFill/></Nav.Link></Col>	
        	</Row>
      	</Container>
    </Navbar>
    <Outlet/>
    </>
  );
};

export default MyNav;
