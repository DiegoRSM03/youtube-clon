import React from 'react'
import logo from '../../assets/img/youtube-logo.png'

function MenuAndLogo({ handleToggleMenuStatus }) {
  return (
    <div className="topbar__menu-and-logo">
      <i onClick={ handleToggleMenuStatus } className="topbar__menu flaticon-menu-button"></i>
      <div className="topbar__logo">
        <img className="topbar__logo-icon" alt="Youtube logo" src={ logo } />
        <span className="topbar__logo-text">Youtube</span>
      </div>
    </div>
  )
}

export default MenuAndLogo
