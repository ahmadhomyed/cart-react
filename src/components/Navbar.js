import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AppNavbar = () => {
	const cart = useSelector((state) => state.cartSlice);
  return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Link className='navbar-brand' to="/products">CartApp</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Link className="nav-link" to="/products">
							Products
						</Link>
						<Link className="nav-link" to="/cart">
							Cart -{cart.length}
						</Link>

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
		// <nav className="navbar navbar-expand-lg navbar-light bg-light">
		// 	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		// 		<span className="navbar-toggler-icon"></span>
		// 	</button>
		// 	<div className="collapse navbar-collapse" id="navbarNav">
		// 		<ul className="navbar-nav">
		// 			<li className="nav-item active">
		// 				<Link to={"/cart"} className="nav-link">
		// 					Home
		// 				</Link>
		// 			</li>
		// 			<li className="nav-item">
		// 				<Link to={"/products"} className="nav-link">
		// 					Records
		// 				</Link>
		// 			</li>
		// 		</ul>
		// 	</div>
		// </nav>
  );
}

export default AppNavbar