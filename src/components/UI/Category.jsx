import React from 'react'
import '../../styles/category.css'
import serviceData from '../../assets/data/serviceData'
import { Col, Container, Row } from 'reactstrap'

import { motion } from 'framer-motion'

const Category = () => {
  return (
   <Container>
    <Row>

    {
        serviceData.map((item,index) => (
        <Col lg = '3' md='4' sm = '6'  key={index}>
        <motion.div 
        whileHover={{scale:1.1}}
        className='category__item' style={{background: `${item.bg}`}}>
            <span><i class={item.icon}></i></span>
            <div>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
            </div>
        </motion.div>
        </Col>
        ))
    }
    </Row>
   </Container>
  )
}

export default Category
