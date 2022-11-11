import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import heroTime from "../assets/images/counter-timer-img.png"

import products from "../assets/data/products";
import { motion } from "framer-motion";
import "../styles/home.css";
import Category from "../components/UI/Category";
import ProductCard from "../components/UI/ProductCard/ProductCard";
import Clock from "../components/UI/Clock/Clock";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState([])
  useEffect(()=>{
    const fillterTrending = products.filter((item)=> item.category === 'chair' )
  const sliceTrending = fillterTrending.slice(0,4)
  setTrendingProduct(sliceTrending)
  },[])

  const [bestSaleProduct, setBestSaleProduct] = useState([])
  useEffect(()=>{
    const fillterBestSale = products.filter((item)=> item.category === 'sofa' )
    setBestSaleProduct(fillterBestSale)
  },[])

  const [arrivalsProduct, setArrivalsProduct] = useState([])
  useEffect(()=>{
    const fillterArrival = products.filter((item)=> ((item.category === 'mobile') || (item.category === 'wireless')) )
    setArrivalsProduct(fillterArrival)
  },[])

  const [popularProduct, setPopularProduct] = useState([])
  useEffect(()=>{
    const fillterPopular = products.filter((item)=> item.category === 'watch' )
  const slicePopular = fillterPopular.slice(0,4)
  setPopularProduct(slicePopular)
  },[])
  return (
    <Helmet title="Home">
      <section className="banner__content">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="hero__content">
                <h6>Trending product in 2022</h6>
                <h1>
                  Make Your Interior More <br />
                  Minimalistic & Modern
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur iure quas illo voluptates labore tempore!
                </p>

                <div className="hero__btn">
                  <motion.button
                    whileTap={{ scale: 1.1 }}
                    className="shop__btn d-flex align-items-center justify-content-between"
                  >
                    <Link to="/shop">Shop Now</Link>{" "}
                    <i class="ri-arrow-right-s-line"></i>
                  </motion.button>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="text-end">
              <img src={heroImg} alt="heroImg" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Trending Products</h2>
            </Col>
            {
              trendingProduct.map((item) => (
                <Col lg="3" md="6" key = {item.id}>
                <ProductCard item = {item}/>
                </Col>
              ))
            }
             
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Best Sales</h2>
            </Col>
            {
              bestSaleProduct.map((item,index) => (
                <Col lg="3" md="6" key = {index}>
                <ProductCard item = {item} />
                </Col>
              ))
            }
             
          </Row>
        </Container>
      </section>


      <section className="banner__time">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" >
            <div className="clock__top-content">
            <h4 className="text-white fs-6 mb-2">Limited Offer</h4>
            <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
            </div>
            <Clock/>
            <motion.button 
            whileHover={{scale: 1.1}} className="shop__btn store__btn"><Link to="/shop">Visit Store</Link></motion.button>
            </Col>
            <Col llg="6" md="6" sm="6" className="text-end">
            <img src={heroTime} alt = "heroTime"/>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>New Arrivals</h2>
            </Col>
            {
              arrivalsProduct.map((item) => (
                <Col lg="3" md="6" key = {item.id}>
                <ProductCard item = {item}/>
                </Col>
              ))
            }
             
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular in Category</h2>
            </Col>
            {
              popularProduct.map((item) => (
                <Col lg="3" md="6" key = {item.id}>
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

export default Home;
