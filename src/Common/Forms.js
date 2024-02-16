import React from 'react';
import {Form, Button, Col, Row, InputGroup} from 'react-bootstrap';

const Forms=()=>{
	return(
		<Form className="form2">

      		<h1 className="h12">Get 20% Off On <br/><span className="color1">First Purchase</span></h1><br/>
      		<Col className="form3">
        		<Form.Group as={Col} className="inputBox" controlId="fEmail"b >
         			<Form.Control  type="email" className="inputBox" placeholder="Enter Your Email Address" name="fEmail" />
        		</Form.Group>

        		<Form.Group as={Col} className="inputBox" controlId="fName">
          			<Form.Control type="text" className="inputBox" placeholder="Create Password" name="fName"/>
        		</Form.Group>

        		<Form.Group as={Col} controlId="fName" className="inputBox">
          			<Form.Control className="inputBox" type="text" placeholder="Repeat Password" name="fName"/>
        		</Form.Group>

        		<Form.Group as={Col} controlId="buttonsubmit" className="inputBox">
        			<Button className="submitButton" >Register Now</Button>
        		</Form.Group>
      		</Col>
    	</Form>
	);
}
export default Forms;



