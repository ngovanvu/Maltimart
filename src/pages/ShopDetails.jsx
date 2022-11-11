import React,{ useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/Common-Section/Common-Section";
import "../styles/shopdetail.css";
import { motion } from "framer-motion";

import ProductCard from "../components/UI/ProductCard/ProductCard";
import { useDispatch } from "react-redux";
import { cartActions } from "../components/store/shopping-cart/cartSlice";

import { toast } from 'react-toastify';
const ShopDetails = () => {
  // Lọc giá trị nó trùng với id
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    reviews,
    avgRating,
    description,
    shortDesc,
    category,
  } = product;

  // dùng ddeert set giá trị khi kích qua desc và review
  const [tab, setTab] = useState("desc");

  // Lấy giá trị đánh giá trong rating
  const [rating,setRating] = useState(null)

  //Lọc ra các category liên quan khi kích vào xem chi tiết món hàng
  const relatedProduct = products.filter(item => item.category === category)

  // Láy giá trị của đánh giá
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const submitHandler = (e) => {
    e.preventDefault()

    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value
    // console.log(reviewUserName,reviewUserMsg,rating);
    // Lấy giá trị tạo ojbect
    const reviewObj = {
      user: reviewUserName,
      text: reviewUserMsg,
      rating
    }
    console.log(reviewObj);
    toast.success("Submit Review Success ")
   
  }
  // Thêm Vào Giỏ hàng
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      productName,
      price,
      imgUrl
    }))
    toast.success("Product added to the cart")
  } 
// Kích vào hình nó sẽ scroll lên
useEffect(()=>{
  window.scrollTo(0,0)
},[product])
  

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} />
            </Col>
            <Col lg="6">
              <div className="product__detail">
                <h2>{productName}</h2>

                <div className="product__rating">
                  <div>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-fill"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>

                <div className="product__price">
                  <span>${price}</span>
                  <p>
                    Category: <span>{category}</span>
                  </p>
                </div>
                <p>{shortDesc}</p>
                <motion.button whileTap={{ scale: 1.3 }} className="shop__btn"
                onClick={addToCart}>
                  Add to cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-4 py-3">
                <h6
                  className={`${tab === "desc" ? "tab__active" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "tab__active" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Review({reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content mt-4">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__review">
                  <div className="review__wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index}>
                          <h6>Jhon Doe</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review__form" >
                    <h4>Leave your experience</h4>
                      <form className="form" onSubmit={submitHandler}>
                        <div className="form__group">
                        <input type="text" placeholder="Enter your name" required
                        ref={reviewUser} />
                        </div>

                        <div className="form__group d-flex align-items-center gap-5" >
                        <motion.span whileTap={{scale : 1.5}} onClick={()=> setRating(1)}>1<i class="ri-star-s-fill"></i></motion.span>
                        <motion.span whileTap={{scale : 1.5}} onClick={()=> setRating(2)}>2<i class="ri-star-s-fill"></i></motion.span>
                        <motion.span whileTap={{scale : 1.5}} onClick={()=> setRating(3)}>3<i class="ri-star-s-fill"></i></motion.span>
                        <motion.span whileTap={{scale : 1.5}} onClick={()=> setRating(4)}>4<i class="ri-star-s-fill"></i></motion.span>
                        <motion.span whileTap={{scale : 1.5}} onClick={()=> setRating(5)}>5<i class="ri-star-s-fill"></i></motion.span>
                        </div>

                        <div className="form__group">
                        <textarea
                        ref={reviewMsg}
                        rows={4}
                        type="text"
                        placeholder="Write your review"
                        required
                      />
                        </div>
                        
                       
                    <motion.button whileTap={{scale:1.2}} type="submit" className="shop__btn">
                      Submit
                    </motion.button>
                      </form>
                    </div>


                  </div>
                </div>
              )}
            </Col>

            <Col lg ='12' className="mb-5 mt-4">
            <h2 className="related__Product-title">You might also like</h2>
            </Col>
            {
              relatedProduct.map(item =>(
                <Col lg = '3' md ='4' className="mb-4" key={item.id}>
                <ProductCard item = {item}/>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ShopDetails;
