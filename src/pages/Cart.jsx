import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Common-Section/Common-Section";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../components/store/shopping-cart/cartSlice";
import { Col, Container, Row } from "reactstrap";
import "../styles/cart-page.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Subtotal:{" "}
                  <span className="cart__subtotal">${totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="shop__btn me-4">
                    <Link to="/shop">Continue Shopping</Link>
                  </button>
                  <button className="shop__btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, productName, price, imgUrl, quantilty } = props.item;
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={imgUrl} alt="" />
      </td>
      <td className="text-center">{productName}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantilty} px</td>
      <motion.td  whileTap={{scale :1.5}} className="text-center cart__item-del">
        <i class="ri-delete-bin-2-line" onClick={deleteItem}></i>
      </motion.td>
    </tr>
  );
};

export default Cart;
