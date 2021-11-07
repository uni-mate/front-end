import React, { useEffect, useState } from "react"
import useNavbar from "../../../hooks/useNavbar"

import ArrowBackIcon from "../../../assets/icons/attr/goback.png"

import "./ProfileCustomPage.css"

const ProfileCustomPage = () => {
  const [navbarInside, navbarOutside] = useNavbar()
  const [color, setColor] = useState("gray")
  const colorList = [
    "gray",
    " rgb(129, 101, 101)",
    " rgb(131, 84, 84)",
    " rgb(134, 67, 67)",
    " rgb(129, 43, 43)",
  ]

  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])
  return (
    <div className="custom-container">
      <div className="custom__header">
        <div className="custom__header--icon">
          <img src={ArrowBackIcon} alt="" />
        </div>
        <span className="custom__header--title">
          찾고 싶은 방을 검색해보세요.
        </span>
      </div>
      <div className="custom__body">
        <div className="custom__body-img">
          {/* img 임시 */}
          <div
            className="custom__body-image"
            // style={colorList[0]}
            style={{ backgroundColor: `${color}` }}
          ></div>
        </div>
        <div className="custom__body-color">
          <div
            className="custom__body-color1"
            onClick={() => setColor(colorList[0])}
          ></div>
          <div
            className="custom__body-color2"
            onClick={() => setColor(colorList[1])}
          ></div>
          <div
            className="custom__body-color3"
            onClick={() => setColor(colorList[2])}
          ></div>
          <div
            className="custom__body-color4"
            onClick={() => setColor(colorList[3])}
          ></div>
          <div
            className="custom__body-color5"
            onClick={() => setColor(colorList[4])}
          ></div>
        </div>
      </div>
      <div className="custom__select"></div>
    </div>
  )
}

export default ProfileCustomPage
