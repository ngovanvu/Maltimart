import React from "react";
import { ListGroupItem } from "reactstrap";
import productImg from "../../../assets/images/arm-chair-01.jpg";
import './cartItem.css'

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";

import { motion } from "framer-motion";
const CartItem = ({item}) => {
  const {id,productName,imgUrl,quantilty ,totalPrice,price} =item;
  const dispatch = useDispatch();
  const incrementItem = ()=>{
    dispatch(cartActions.addItem({
      id,productName,imgUrl,price,
    }))
  } 
  const decrementItem = ()=>{
    dispatch(cartActions.removeItem(id))
  } 
  const deleteItem =  () => {
    dispatch(cartActions.deleteItem(id))
  }
  return (
    <ListGroupItem className="cart__item border-0">
      <div className="cart__item-info d-flex gap-2">
        <img src={imgUrl} alt="productImg" />

        <div className="cart__product-info w-100 d-flex align-items-center justify-content-between">
          <div>
            <h5 className="cart__product-title">{productName}</h5>
            <p className="cart__product-price d-flex align-items-center gap-5">
              {quantilty}x <span>${totalPrice}</span>
            </p>
            <div className="increase__decrease-btn d-flex align-items-center justify-content-between">
            <motion.span whileTap={{scale:1.2}} className='increase__btn ' onClick={incrementItem}><i class="ri-add-line"></i></motion.span>
            <motion.span whileTap={{scale:1.1}} className='quantity'>{quantilty}</motion.span>
            <motion.span whileTap={{scale:1.2}} className='decrease__btn' onClick={decrementItem}><i class="ri-subtract-line"></i></motion.span>
            </div>
          </div>
          <span className='delete__btn' onClick={deleteItem}><i class="ri-close-line"></i></span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
