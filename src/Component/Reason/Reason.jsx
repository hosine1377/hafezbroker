import React from 'react'
import './Reason.css'
import imgCard1 from '../../../public/images/pic-721b34b85f16682b95ad1dcd0e64e43e.png'
import imgCard2 from '../../../public/images/pic-5ada3de2c48fe4801dd9f9fa8a28c215.png'
import imgCard3 from '../../../public/images/pic-721b34b85f16682b95ad1dcd0e64e43e.png'
import imgCard4 from '../../../public/images/pic-a92215fd293eb2d243e537767f8b363d.png'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../Title/Title'
// d-flex align-items-lg-center  justify-content-lg-between flex--column align-items-md-start
function Reason() {
  return (
    <section className="section-reason">
      <Title
        title="حافظ در یک نگاه
"
      />
      <Container>
        <div className="reason-wrapper ">
          <div className="reason-right">
            <h4 className="reason-title">
              چرا حافظ برای سرمایه گذاری مناسب است ؟
            </h4>
            <div className="reason-lists">
              <li className="reason-item">
                <span className="dot"></span>
                <span className="line"></span> <p> سبدگردانی اختصاصی حافظ</p>
              </li>
              <li className="reason-item">
                <span className="dot"></span>
                <span className="line"></span>{' '}
                <p> سامانه معاملاتی پرسرعت و ایمن</p>
              </li>
              <li className="reason-item">
                <span className="dot"></span>
                <span className="line"></span>{' '}
                <p> باشگاه مشتریان با خدمات ویژه</p>
              </li>
              <li className="reason-item">
                <span className="dot"></span>
                <span className="line"></span>{' '}
                <p> مشاوره هدفمند سرمایه‌گذاری</p>
              </li>
              <li className="reason-item">
                <span className="dot"></span>
                <span className="line"></span>
                <p> سیستم تخصیص اعتبار هوشمند</p>
              </li>
            </div>
          </div>
          <div className="reason-left">
            <Row className="row">
              <Col className="col">
                <div className=" reason-card-one item">
                  <div className="img-cover">
                    <img src={imgCard1} alt="" />
                  </div>
                  <div className="discription">
                    <p>هفتمین کارگزاری از لحاظ حجم معاملات در سال ۹۹</p>
                  </div>
                </div>
                <div className=" reason-card-tow item">
                  <div className="img-cover">
                    <img src={imgCard2} alt="" />
                  </div>
                  <div className="discription">
                    <p>4.500 میلیارد ریال سرمایه ثبتی</p>
                  </div>
                </div>
              </Col>

              <Col className="col mt-5">
                <div className="reason-card-three item">
                  <div className="img-cover">
                    <img src={imgCard3} alt="" />
                  </div>
                  <div className="discription">
                    <p>1530هزار میلیارد ریال گردش مالی سال 99</p>
                  </div>
                </div>
                <div className="reason-card-fure item">
                  <div className="img-cover">
                    <img src={imgCard4} alt="" />
                  </div>
                  <div className="discription">
                    <p>۲۲ شعبه فعال در سراسر کشور</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Reason
