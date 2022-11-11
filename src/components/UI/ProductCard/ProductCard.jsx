import React from "react";
import cardImg from "../../../assets/images/arm-chair-01.jpg";
import "../../../styles/productcard-ui.css";

import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

import { toast } from 'react-toastify';
const ProductCard = (props) => {
  const { id, productName, imgUrl, category, price } = props.item;
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName,
        imgUrl,
        price,
      })
    );
    toast.success("product added to the cart")
  };
  return (
    <div className="product__item">
      <motion.div whileHover={{ scale: 1.1 }} className="product__img">
        <Link to={`/shop/${id}`}>
          <img src={imgUrl} alt="cardImg" />
        </Link>
      </motion.div>
      <h6 className="product__name">
        <Link to={`/shop/${id}`}>{productName}</Link>
      </h6>
      <span>{category}</span>
      <div className="product__card-bottom">
        <span>${price}</span>
        <motion.span whileHover={{ scale: 1.1 }} onClick={addToCart}>
          <i class="ri-add-line"></i>
        </motion.span>
      </div>
    </div>
  );
};

export default ProductCard;
