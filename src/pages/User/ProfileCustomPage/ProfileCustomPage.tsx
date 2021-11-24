import React, { useEffect, useState } from "react"
import ArrowBackIcon from "../../../assets/icons/attr/goback.png"
import { useHistory } from "react-router-dom"

import p1 from "../../../assets/profileImage/p1.png"
import p2 from "../../../assets/profileImage/p2.png"
import p3 from "../../../assets/profileImage/p3.png"

import "./ProfileCustomPage.css"

interface Props {
  username: string
}

const getProfileImg = (name: string) => {
  if (name === "고니") {
    return p1
  } else if (name === "아이유") {
    return p2
  } else if (name === "조이") {
    return p3
  }
}

const ProfileCustomPage = ({ username }: Props) => {
  console.log(username)
  const [image, setImage] = useState<string>()
  useEffect(() => {
    setImage(getProfileImg(username))
  }, [username])
  const history = useHistory()
  return (
    <div className="profileedit-container">
      <div className="profileedit__header">
        <div
          className="profileedit__header--icon"
          onClick={() => history.goBack()}
        >
          <img src={ArrowBackIcon} alt="" />
        </div>
        <span className="profileedit__header--title">프로필 커스터마이징</span>
      </div>
      <div className="profileedit__content">
        <div className="profileimg__container">
          <div className="profileimg__img">
            <img src={image} alt="커스터마이징" />
          </div>
          <div className="profileimg__color">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="profilecustom__container">
          <div className="profilecustom__list">
            <div className="profilecustom__eye"></div>
            <div className="profilecustom__nose"></div>
            <div className="profilecustom__mouse"></div>
          </div>
          <div className="profilecustom__atr"></div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCustomPage
