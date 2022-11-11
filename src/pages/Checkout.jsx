import React from "react";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Common-Section/Common-Section";
import "../styles/checkout.css";

import { useSelector } from "react-redux";
const Checkout = () => {
  const totalQuanlity = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=> state.cart.totalAmount)
  const shipping = 30
  const totalAmountAmount = totalAmount + Number(shipping);
  return (
    <Helmet title="CheckOut">
      <CommonSection title="CheckOut" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6>Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Phone number" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Street address" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="City" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Postal Code" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty:<span>{totalQuanlity} item</span>
                </h6>
                <h6>
                  Subtotal:<span>${totalAmount}</span>
                </h6>
                <h6>
                  Shipping <br />
                  Free shipping<span>${shipping}</span>
                </h6>

                <h4>
                  Total Cost:<span>${totalAmountAmount}</span>
                </h4>
                <button className="shop__btn auth__btn w-100">
                Place an order
              </button>
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
