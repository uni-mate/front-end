import React from "react"
import { NavLink } from "react-router-dom"

import "./Navbar.css"

function Navbar() {
  return (
    <div className="nav__container">
      <nav className="nav">
        <ul className="nav-menu">
          <li className="nav-option">
            <NavLink exact to="/room" activeClassName="selected">
              <div className="nav-container">
                <div className="roomlist-icon"></div>
                <span>방 목록</span>
              </div>
            </NavLink>
          </li>
          <li className="nav-option">
            <NavLink exact to="/room/12" activeClassName="selected">
              <div className="nav-container">
                <div className="chat-icon"></div>
                <span>채팅</span>
              </div>
            </NavLink>
          </li>
          <li className="nav-option">
            <NavLink exact to="/room/create" activeClassName="selected">
              <div className="nav-container">
                <div className="makeroom-icon"></div>
                <span>방 만들기</span>
              </div>
            </NavLink>
          </li>
          <li className="nav-option">
            <NavLink exact to="/profile" activeClassName="selected">
              <div className="nav-container">
                <div className="info-icon"></div>
                <span>내 정보</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
