import React from "react";
import { ListGroup } from "react-bootstrap";
import { Container } from "@material-ui/core";
import './CartItem.scss'
const CartItem = ({item}) => {
    const {name,price,image} = item
  return (
  <div>
    cartItem
     
<Container>
    <ListGroup>
        <h6>{name}</h6>
        <h6>{price}</h6>
        <img src={image} alt="" />
    </ListGroup>
</Container>
  </div>
    );
} 

export default CartItem;
