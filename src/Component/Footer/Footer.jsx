import React from 'react'
import './Footer.css'
import { Container } from 'react-bootstrap'
import footerLogo from '../../../public/images/featur_pic-c9a6e92c50b3564bc236ae6753e94633.png'
import footerIcon from '../../../public/images/1ow.png'
import { FaInstagram } from 'react-icons/fa'
import { CiFacebook } from 'react-icons/ci'
import { FaWhatsapp } from 'react-icons/fa'
import { CiLinkedin } from 'react-icons/ci'
import { CiYoutube } from 'react-icons/ci'
function Footer() {
  return (
    <footer>
      <Container>
        <h4 className="footer-title">دسترسی سریع</h4>
        <div className="wrapper-footer d-flex   justify-content-between align-items-center  flex-column  flex-lg-row">
          <div className="footer-right">
            <ul>
              <li className="footer-item">
                <a href="">تماس با ما</a>
              </li>
              <li className="footer-item">
                <a href="">سوالات متداول</a>
              </li>
              <li className="footer-item">
                <a href="">شماره حساب‌های </a>
              </li>
              <li className="footer-item">
                <a href="">بانکی</a>
              </li>
              <li className="footer-item">
                <a href="">آموزش</a>
              </li>
            </ul>
            <ul>
              <li className="footer-item">
                <a href="">سهام عدالت</a>
              </li>
              <li className="footer-item">
                <a href="">پذیرش آنلاین</a>
              </li>
              <li className="footer-item">
                <a href="">احراز هویت سجام</a>
              </li>
            </ul>
          </div>
          <div className="footer-left">
            <a href="" className="bank">
              {' '}
              <img src={footerIcon} className="bank-image" alt="" />
            </a>
            <img
              src={footerLogo}
              className="footer-logo d-lg-inline-block d-none"
              alt=""
            />
          </div>
        </div>
        <div className="footer-bottom">
          <a href="tel:02183321000">83321000 021</a>
          <div className="icons">
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <CiFacebook />
            </a>
            <a href="">
              <FaWhatsapp />
            </a>
            <a href="">
              <CiLinkedin />
            </a>
            <a href="">
              <CiYoutube />
            </a>
          </div>
          <p>تمامی حقوق این صفحات متعلق به شرکت کارگزاری حافظ است</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
