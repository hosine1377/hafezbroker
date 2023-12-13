import './Search.css'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FaSearch } from 'react-icons/fa'
function Search() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div className="btn-seacrch" onClick={handleShow}>
        <li class="nav-item mx-1 nav-item-search">
          <a class="nav-link search" href="#">
            <FaSearch />
          </a>
        </li>
      </div>

      <Modal className="Modal-search" show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <input placeholder=" جستجو.." />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Search
