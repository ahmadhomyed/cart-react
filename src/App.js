import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Products";

import { useDispatch } from "react-redux";
import { fetchProducts } from "./rtk/slices/productslice.js";
import AppNavbar from "./components/Navbar.js";
import { Route, Routes } from "react-router";
import { Container } from "react-bootstrap";

function App() {
	const dispatch = useDispatch();
	return (
		<div className="App container">
			<AppNavbar />
			<Container>
				<Routes>
					<Route path="/cart" element={<Cart />} />
					<Route path="/products" element={<Products />} />
				</Routes>
			</Container>
		</div>
	);
}

export default App;
