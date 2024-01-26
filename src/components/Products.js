import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/productslice";
import { addToCart } from "../rtk/slices/cart-slice";

function Products  ()  {
  const products = useSelector((state)=>state.products);
	const cart = useSelector((state) => state.cartSlice);
	
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts());
  },[])
	
  const productsMap = products.map((product)=>{
    return (
		<Col key={product.id}>
			<Card style={{ width: "18rem" }} className="shadow-sm">
				<Card.Img style={{ height: "300px" }} variant="top" src={product.image} />
				<Card.Body>
					<Card.Title>{product.title.substring(0, 50)}</Card.Title>
					<Card.Text>{product.description.substring(0, 70)}....</Card.Text>
					<Card.Text>{product.price} $</Card.Text>
					<Button variant="primary" onClick={() => dispatch(addToCart(product))}>
						Add To Cart
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
  })
	return (
		<Container>
			<Row>
				{productsMap}
			</Row>
		</Container>
	);
};

export default Products;
