import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";

const Cart = () => {
	const products = useSelector((state) => state.cartSlice);
	const dispatch = useDispatch();
  const totalPrice = products.reduce((acc,current)=>{
    return acc + (current.price * current.quantity);
  },0)
	const data = products.map((product) => {
		return (
			<tr key={product.id}>
				<td>{product.id}</td>
				<td>{product.title}</td>
				<td>
					<img src={product.image} alt={product.title} style={{ width: "60px", height: "60px" }} />
				</td>
				<td>{product.price} $</td>
				<td>{product.quantity} </td>
				<td>
					<Button
						variant="danger"
						onClick={() => {
							dispatch(deleteFromCart(product));
						}}>
						delete
					</Button>
				</td>
			</tr>
		);
	});
	return (
		<Container>
			<h1>Your Shopping Cart</h1>
			<h5>Total price is :{totalPrice.toFixed(2)}</h5>
			<Button className="my-2" onClick={() => dispatch(clear())}>
				Clear Cart
			</Button>
			<Table striped bordered hover variant="white">
				<thead>
					<tr>
						<th>#</th>
						<th>Title</th>
						<th>image</th>
						<th>price</th>
						<th>quantity</th>
						<th>action</th>
					</tr>
				</thead>
				<tbody>{data}</tbody>
			</Table>
		</Container>
	);
};

export default Cart;
