import React from 'react'
import { useState } from 'react'
// import css file
import './ArrowUp.css'
//import react icons
import { IoIosArrowUp } from 'react-icons/io'

function ArrowUp() {
  const [arrow, setArrow] = useState(false)
  const handelScroll = () => {
    if (window.scrollY > 90) {
      setArrow(true)
    } else {
      setArrow(false)
    }
  }
  window.addEventListener('scroll', handelScroll)
  return (
    <a href="#" className={arrow ? 'arrowup' : 'arrow-none'}>
      <IoIosArrowUp className="arrowup-icon" />
    </a>
  )
}

export default ArrowUp
