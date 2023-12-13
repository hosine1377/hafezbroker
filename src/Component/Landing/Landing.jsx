import React from 'react'
import './Landing.css'
import { Col, Container, Row } from 'react-bootstrap'
import landingImg from '../../../public/images/pic-5635aea6fbc831cc78a7befc34edaf0a.png'
import logoIcon from '../../../public/images/icon-2304bdf583e25833d72462aa9c09fc89.png'
function Landing() {
  return (
    <section className="landing">
      <Container>
        <Row className="wrapper justify-content-md-center justify-content-center">
          <Col className="col-6 d-md-none d-none d-lg-inline-block">
            <div className="landing-rigth">
              <img src={landingImg} className="img-fluid" alt="" />
            </div>
          </Col>
          <Col className="col-6">
            <div className="landing-left">
              <div className="lanidng-logo">
                <img src={logoIcon} alt="" />
              </div>
              <h3 className="landin-title">
                فرصتی برای گردهمایی بزرگان بازار سرمایه
              </h3>
              <button className="btn btn-blue">ورود/ثبت نام</button>
              <a href="#" className="phon">
                {' '}
                تلفن : 021-83321000{' '}
              </a>
              <a href="#" className="email">
                {' '}
                ایمیل : info@hafezbroker.ir{' '}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Landing
