import React, { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { navbarIN, navbarOut } from "../../redux/modules/navbar"
import { useHistory } from "react-router"
import ArrowBackIcon from "../../assets/icons/attr/goback.png"
import Slider from "@mui/material/Slider"

import "./FilterPage.css"

const FilterPage = () => {
  const [value, setValue] = useState(0)
  const history = useHistory()
  const dispatch = useDispatch()
  const isNavbarOut = useCallback(() => {
    dispatch(navbarOut())
  }, [dispatch])
  const isNavbarIn = useCallback(() => {
    dispatch(navbarIN())
  }, [dispatch])
  useEffect(() => {
    isNavbarOut()
  }, [isNavbarOut])

  const prevPageHandler = () => {
    history.goBack()
    isNavbarIn()
  }

  return (
    <div className="filter-container">
      <div className="filter__header">
        <div className="filter__header--icon" onClick={prevPageHandler}>
          <img src={ArrowBackIcon} alt="" />
        </div>
        <span className="filter__header--title">
          찾고 싶은 방을 검색해보세요.
        </span>
      </div>
      <div className="filter__body">
        <div className="room-entity">
          <span className="room-entity__title">방 성격</span>
          <div className="room-entity__select">
            <input
              type="radio"
              name="room-type"
              value="appointment"
              id="appointment"
            />
            <label htmlFor="appointment">약속방</label>
            <input
              type="radio"
              name="room-type"
              value="chatting"
              id="chatting"
            />
            <label htmlFor="chatting">채팅방</label>
          </div>
        </div>
        <div className="room-grade">
          <span className="room-grade__title">학년</span>
          <div className="room-grade__select">
            <input type="radio" name="room-grade" value="1" id="1" />
            <label htmlFor="1">1학년</label>
            <input type="radio" name="room-grade" value="2" id="2" />
            <label htmlFor="2">2학년</label>
            <input type="radio" name="room-grade" value="3" id="3" />
            <label htmlFor="3">3학년</label>
            <input type="radio" name="room-grade" value="4" id="4" />
            <label htmlFor="4">4학년</label>
            <input type="radio" name="room-grade" value="5" id="5" />
            <label htmlFor="5">5학년 이상</label>
            <input
              type="radio"
              name="room-grade"
              value="irrelevant"
              id="irrelevant"
            />
            <label htmlFor="irrelevant">상관 없음</label>
          </div>
        </div>
        <div className="room-user">
          <span className="room-user__title">인원</span>
          <div className="room-user__select">
            <Slider
              className="room-user__silder"
              defaultValue={3}
              aria-label="room-user"
              step={1}
              min={3}
              max={15}
              valueLabelDisplay="auto"
            />
            <span className="room-user__select--min">최소 3명</span>
            <span className="room-user__select--max">15명 이상</span>
          </div>
        </div>
        <div className="user-gender">
          <span className="user-gender__title">성별</span>
          <div className="user-gender__select">
            <input type="radio" name="gender" value="men" id="men" />
            <label htmlFor="men">남자</label>
            <input type="radio" name="gender" value="women" id="women" />
            <label htmlFor="women">여자</label>
            <input
              type="radio"
              name="gender"
              value="every-gender"
              id="every-gender"
            />
            <label htmlFor="every-gender">상관 없음</label>
          </div>
        </div>
        <div className="user-common">
          <span className="user-common__title">공통점?</span>
          <div className="user-gender__select">
            <input type="radio" name="gender" value="men" id="men" />
            <label htmlFor="men">남자</label>
            <input type="radio" name="gender" value="women" id="women" />
            <label htmlFor="women">여자</label>
          </div>
        </div>
        <div className="meet-purpose">
          <span className="meet-purpose__title">만남 목적?</span>
          <div className="user-gender__select">
            <input type="radio" name="gender" value="men" id="men" />
            <label htmlFor="men">남자</label>
            <input type="radio" name="gender" value="women" id="women" />
            <label htmlFor="women">여자</label>
          </div>
        </div>
        <div className="meet-available">
          <span className="meet-available__title">만남 여부</span>
          <div className="meet-available__select">
            <input type="radio" name="meet-available" value="yes" id="yes" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="meet-available" value="no" id="no" />
            <label htmlFor="no">No</label>
            <input
              type="radio"
              name="meet-available"
              value="after"
              id="after"
            />
            <label htmlFor="after">나중에</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterPage
