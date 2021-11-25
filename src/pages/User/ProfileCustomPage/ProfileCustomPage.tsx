import React, { useEffect, useState } from "react"
import ArrowBackIcon from "../../../assets/icons/attr/goback.png"
import { useHistory } from "react-router-dom"

import p1 from "../../../assets/profileImage/p1.png"
import p2 from "../../../assets/profileImage/p2.png"
import p3 from "../../../assets/profileImage/p3.png"

// 대표 custom
import eyebrow3 from "../../../assets/customAtr/eyebrow3.png"
import eye1 from "../../../assets/customAtr/eye1.png"
import mouse5 from "../../../assets/customAtr/mouse5.png"

import eyebrow1 from "../../../assets/customAtr/eyebrow1.png"
import eyebrow2 from "../../../assets/customAtr/eyebrow2.png"
import eyebrow4 from "../../../assets/customAtr/eyebrow4.png"
import eyebrow5 from "../../../assets/customAtr/eyebrow5.png"
import eyebrow6 from "../../../assets/customAtr/eyebrow6.png"

import eye2 from "../../../assets/customAtr/eye2.png"
import eye3 from "../../../assets/customAtr/eye3.png"
import eye4 from "../../../assets/customAtr/eye4.png"
import eye5 from "../../../assets/customAtr/eye5.png"
import eye6 from "../../../assets/customAtr/eye6.png"

import mouse1 from "../../../assets/customAtr/mouse1.png"
import mouse2 from "../../../assets/customAtr/mouse2.png"
import mouse3 from "../../../assets/customAtr/mouse3.png"
import mouse4 from "../../../assets/customAtr/mouse4.png"
import mouse6 from "../../../assets/customAtr/mouse6.png"

import background1 from "../../../assets/customAtr/background1.png"
import background2 from "../../../assets/customAtr/background2.png"
import background3 from "../../../assets/customAtr/background3.png"
import background4 from "../../../assets/customAtr/background4.png"
import background5 from "../../../assets/customAtr/background5.png"

import useNavbar from "../../../hooks/useNavbar"

import "./ProfileCustomPage.css"

interface Props {
  username?: string
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
  const [detEyeBrow, setDetEyeBrow] = useState<string>(eyebrow3)
  const [detEye, setDetEye] = useState<string>(eye1)
  const [detMouse, setDetMouse] = useState<string>(mouse4)
  const [page, setPage] = useState<number>(1)
  const [image, setImage] = useState<string>()
  const [color, setColor] = useState<string>(background3)
  const [, navbarOutside] = useNavbar()
  useEffect(() => {
    setImage(getProfileImg(username))
  }, [username])
  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])
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
            <img src={color} alt="커스터마이징"></img>
            <div className="broweye">
              <img
                src={detEyeBrow}
                alt="눈썹"
                style={{
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
            <div className="eye">
              <img
                src={detEye}
                alt="눈"
                style={{
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
            <div className="mouse">
              <img
                src={detMouse}
                alt="입"
                style={{
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
          </div>
          <div className="profileimg__color">
            <div onClick={() => setColor(background1)}></div>
            <div onClick={() => setColor(background2)}></div>
            <div onClick={() => setColor(background3)}></div>
            <div onClick={() => setColor(background4)}></div>
            <div onClick={() => setColor(background5)}></div>
          </div>
        </div>
        <div className="profilecustom__container">
          <div className="profilecustom__list">
            <input
              type="radio"
              name="custom"
              className="profilecustom__eyebrow"
              id="eyebrow"
              onChange={() => setPage(1)}
            ></input>
            <label htmlFor="eyebrow">
              <img src={eyebrow3} alt="눈썹" />
              <span>눈썹</span>
            </label>
            <input
              type="radio"
              name="custom"
              className="profilecustom__eye"
              id="eye"
              onChange={() => setPage(2)}
            ></input>
            <label htmlFor="eye">
              <img src={eye1} alt="eye" />
              <span>눈</span>
            </label>
            <input
              type="radio"
              name="custom"
              className="profilecustom__mouse"
              id="mouse"
              onChange={() => setPage(3)}
            ></input>
            <label htmlFor="mouse">
              <img src={mouse5} alt="mouse" />
              <span>입</span>
            </label>
          </div>
          <div className="profilecustom__atr">
            {page === 1 && (
              <div className="custom__atr-1">
                <div
                  onClick={() => setDetEyeBrow(eyebrow1)}
                  className={`${detEyeBrow === eyebrow1 && "selected"}`}
                >
                  <img src={eyebrow1} alt="" />
                </div>
                <div
                  onClick={() => setDetEyeBrow(eyebrow2)}
                  className={` ${detEyeBrow === eyebrow2 && "selected"}`}
                >
                  <img src={eyebrow2} alt="" />
                </div>
                <div
                  onClick={() => setDetEyeBrow(eyebrow3)}
                  className={` ${detEyeBrow === eyebrow3 && "selected"}`}
                >
                  <img src={eyebrow3} alt="" />
                </div>
                <div
                  onClick={() => setDetEyeBrow(eyebrow4)}
                  className={` ${detEyeBrow === eyebrow4 && "selected"}`}
                >
                  <img src={eyebrow4} alt="" />
                </div>
                <div
                  onClick={() => setDetEyeBrow(eyebrow5)}
                  className={` ${detEyeBrow === eyebrow5 && "selected"}`}
                >
                  <img src={eyebrow5} alt="" />
                </div>
                <div
                  onClick={() => setDetEyeBrow(eyebrow6)}
                  className={` ${detEyeBrow === eyebrow6 && "selected"}`}
                >
                  <img src={eyebrow6} alt="" />
                </div>
              </div>
            )}
            {page === 2 && (
              <div className="custom__atr-2">
                <div
                  onClick={() => setDetEye(eye1)}
                  className={`${detEye === eye1 && "selected"}`}
                >
                  <img src={eye1} alt="" />
                </div>
                <div
                  onClick={() => setDetEye(eye2)}
                  className={` ${detEye === eye2 && "selected"}`}
                >
                  <img src={eye2} alt="" />
                </div>
                <div
                  onClick={() => setDetEye(eye3)}
                  className={` ${detEye === eye3 && "selected"}`}
                >
                  <img src={eye3} alt="" />
                </div>
                <div
                  onClick={() => setDetEye(eye4)}
                  className={` ${detEye === eye4 && "selected"}`}
                >
                  <img src={eye4} alt="" />
                </div>
                <div
                  onClick={() => setDetEye(eye5)}
                  className={` ${detEye === eye5 && "selected"}`}
                >
                  <img src={eye5} alt="" />
                </div>
                <div
                  onClick={() => setDetEye(eye6)}
                  className={` ${detEye === eye6 && "selected"}`}
                >
                  <img src={eye6} alt="" />
                </div>
              </div>
            )}
            {page === 3 && (
              <div className="custom__atr-3">
                <div
                  onClick={() => setDetMouse(mouse1)}
                  className={`${detMouse === mouse1 && "selected"}`}
                >
                  <img src={mouse1} alt="" />
                </div>
                <div
                  onClick={() => setDetMouse(mouse2)}
                  className={` ${detMouse === mouse2 && "selected"}`}
                >
                  <img src={mouse2} alt="" />
                </div>
                <div
                  onClick={() => setDetMouse(mouse3)}
                  className={` ${detMouse === mouse3 && "selected"}`}
                >
                  <img src={mouse3} alt="" />
                </div>
                <div
                  onClick={() => setDetMouse(mouse4)}
                  className={` ${detMouse === mouse4 && "selected"}`}
                >
                  <img src={mouse4} alt="" />
                </div>
                <div
                  onClick={() => setDetMouse(mouse5)}
                  className={` ${detMouse === mouse5 && "selected"}`}
                >
                  <img src={mouse5} alt="" />
                </div>
                <div
                  onClick={() => setDetMouse(mouse6)}
                  className={` ${detMouse === mouse6 && "selected"}`}
                >
                  <img src={mouse6} alt="" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCustomPage
