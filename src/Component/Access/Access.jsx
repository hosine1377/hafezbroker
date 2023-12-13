import React from 'react'
import './Access.css'
import { Col, Row, Card, Container } from 'react-bootstrap'
import img1 from '../../../public/images/pic-1f920b564018e8283c289e4dde932bf1.jpeg'
import img2 from '../../../public/images/pic-18dd4b26654348705667810d6bb629ba.jpeg'
import img3 from '../../../public/images/pic-eab3597212889498ffff3ccd7e53aceb.jpeg'
import Title from '../Title/Title'
function Access() {
  return (
    <div className="access">
      <Container>
        <Title title="دسترسی سریع" />
        <Row className="justify-content-md-center">
          <Col lg={4} md={12} className=" card my-md-3 my-3">
            <Card.Img className="card-imgage " variant="top" src={img2} />

            <Card.Title className="card-title">Card Title</Card.Title>
          </Col>
          <Col lg={4} md={12} className="card card my-md-3 my-3   ">
            <Card.Img className="card-imgage " variant="top" src={img3} />

            <Card.Title className="card-title">Card Title</Card.Title>
          </Col>
          <Col lg={4} md={12} className=" card card my-md-3  my-3">
            <Card.Img className="card-imgage " variant="top" src={img2} />

            <Card.Title className="card-title">Card Title</Card.Title>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Access
