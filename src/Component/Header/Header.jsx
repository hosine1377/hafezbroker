import React, { useState } from 'react'
import './Header.css'
import LogoNabar from '../../../public/images/logo-3e59b5092d98f7189ae924d77bd66f55.png'
import { FaUserCheck } from 'react-icons/fa'
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap'
import Search from '../Search/Search'
function Header() {
  const [color, setColor] = useState(false)
  const handelScroll = () => {
    if (window.scrollY > 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll', handelScroll)
  return (
    <>
      {' '}
      <div
        class={
          color
            ? 'header-fixed fixed-top top-0 end-0  header-bg'
            : 'header-fixed fixed-top top-0 end-0  header '
        }
      >
        <Navbar
          expand="lg"
          class="navbar navbar-expand-lg navbar-dark  pe-lg-5 ps-lg-4 clearfix"
        >
          <Container fluid>
            <Navbar.Brand class="navbar-brand" href="#">
              <img class="img-fluid" src={LogoNabar} alt="logo   " />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={'offcanvasNavbar-expand-lg'} />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-lg"
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav class="navbar-nav mx-auto align-items-center">
                  <li class="nav-item  mx-1 ">
                    {' '}
                    <Nav.Link class="nav-link text-dark" title="خانه" href="#">
                      خانه{' '}
                    </Nav.Link>{' '}
                  </li>
                  <li class="nav-item dropdown mx-1 ">
                    <Nav.Link
                      class="nav-link  dropdown-toggle text-dark position-relative"
                      href="#"
                      data-bs-toggle="dropdown"
                      title="سروسیس ها"
                    >
                      خدمات
                    </Nav.Link>
                    <ul class="dropdown-menu ">
                      <li>
                        <a class="dropdown-item" href="#">
                          {' '}
                          Submenu item 1
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          {' '}
                          Submenu item 2{' '}
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          {' '}
                          Submenu item 3{' '}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item mx-1 ">
                    <Nav.Link
                      class="nav-link text-dark "
                      href="#"
                      title="تعرفه ها"
                    >
                      سرمایه‌گذاری
                    </Nav.Link>
                  </li>
                  <li class="nav-item mx-1 ">
                    <Nav.Link
                      class="nav-link text-dark "
                      href="#"
                      title="تعرفه ها"
                    >
                      مجله حافظ
                    </Nav.Link>
                  </li>
                  <li class="nav-item dropdown mx-1 ">
                    <Nav.Link
                      class="nav-link  dropdown-toggle text-dark"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      درباره حافظ
                    </Nav.Link>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          {' '}
                          Submenu item 1
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          {' '}
                          Submenu item 2{' '}
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          {' '}
                          Submenu item 3{' '}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item mx-1 ">
                    <Nav.Link class="nav-link text-dark" href="#">
                      تماس با ما
                    </Nav.Link>
                  </li>
                  <li class="nav-item mx-1 ">
                    <a class="nav-link text-dark" href="#">
                      باشگاه مشتریان
                    </a>
                  </li>
                  <li class="nav-item nav-link-btn-gold dropdown mx-1 ">
                    <a
                      class="nav-link  dropdown-toggle text-white"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      معاملات آنلاین
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          {' '}
                          Submenu item 1
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          {' '}
                          Submenu item 2{' '}
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          {' '}
                          Submenu item 3{' '}
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item mx-1 ">
                    <a
                      class="nav-link navlink-user text-white nav-link-btn-green"
                      href="#"
                    >
                      <FaUserCheck className="user-icon" />
                      <span> افتتاح حساب</span>
                    </a>
                  </li>
                  <Search />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header
