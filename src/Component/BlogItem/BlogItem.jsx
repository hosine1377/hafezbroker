import React from 'react'
import './BlogItem.css'
// import blogImg from '../../../public/images/blog-photo-6ca15ff4ed8c3f73cebe4c604c09c0fd.jpeg'
// import blogImg from ''
import { Col, Row } from 'react-bootstrap'
function BlogItem({ disc, title, src, side }) {
  return (
    <Row className={side ? 'row' : 'row-reverse'}>
      <Col className="col-lg-3 col-md-12 col-12 my-3 ">
        <div className="img-card">
          <img
            src="../../../public/images/blog-photo-6ca15ff4ed8c3f73cebe4c604c09c0fd.jpeg"
            alt=""
          />
        </div>
      </Col>
      <Col className="col-lg-9 col-md-12 col-12  my-3">
        <div className="text p-3 p-lg-4">
          <h4 className="text-title">{title}</h4>
          <div className="text-description">{disc}</div>
          <a href="#" className="morve">
            بیشتر بخوانید
          </a>
        </div>
      </Col>
    </Row>
  )
}

export default BlogItem
