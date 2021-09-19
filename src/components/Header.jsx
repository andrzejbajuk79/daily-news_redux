import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
	return (
		<>
			<Navbar className='yellotail'>
				<LinkContainer to='/'>
					<Navbar.Brand>The daily news</Navbar.Brand>
				</LinkContainer>
			</Navbar>
			<Nav>
				<Nav.Item>
					<LinkContainer to='/'>
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer to='/contact'>
						<Nav.Link>contact</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer to='/form1'>
						<Nav.Link>Form1</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer to='/form2'>
						<Nav.Link>Form2</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer to='/form3'>
						<Nav.Link>Form3</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer to='/reducer'>
						<Nav.Link>Reducer</Nav.Link>
					</LinkContainer>
				</Nav.Item>
			</Nav>
		</>
	);
};

export default Header;
