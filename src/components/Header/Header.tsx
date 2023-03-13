import React from 'react'
import headerLogo from '../../assets/headerLogo.svg'
import css from './Header.module.css'

function Header() {
  return (
    <div className={css.header + "container"}>
      <div className={css.linksleft}>
        <a href="#"><img src={headerLogo} alt="" /></a>
        <a href="#">Home</a>
        <a href="#">Components</a>
        <a href="#">Pages</a>
        <a href="#">Documentation</a>
      </div>
      <div className={css.linksright}></div>
    </div>
  )
}

export default Header
