import React from 'react'
import './Title.css'
import { Container } from 'react-bootstrap'
function Title({ title }) {
  return (
    <div className="section-title">
      <Container>
        <div className="wrapper-title">
          <div className="dot-right"></div>
          <div className="line-right"></div>
          <h3> {title} </h3>
          <div className="line-left"></div> <div className="dot-left"></div>
        </div>
      </Container>
    </div>
  )
}

export default Title
