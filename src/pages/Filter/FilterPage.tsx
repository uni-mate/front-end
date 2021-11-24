import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import ArrowBackIcon from "../../assets/icons/attr/goback.png"
import useNavbar from "../../hooks/useNavbar"

import CustomButton from "./../../components/Partials/CustomButton/CustomButton"
import { UserState } from "./../../types/UserTypes"
import { FilterData } from "./../../types/FilterTypes"

import _ from "lodash"

import "./FilterPage.css"

interface Props {
  userInfo: UserState
  filterInfo: FilterData
  setFilterHandler: (req: FilterData) => void
  filterStart: () => void
  filterEnd: () => void
}

const FilterPage = ({
  userInfo,
  filterInfo,
  setFilterHandler,
  filterStart,
  filterEnd,
}: Props) => {
  const [filterChatType, setFilterChatType] = useState("")
  const [filterGrade, setFilterGrade] = useState<string>()
  const [filterGender, setFilterGender] = useState("")
  const [filterCommon, setFilterCommon] = useState("")
  const [filterPurpose, setfilterPurpose] = useState<string[]>([])
  const history = useHistory()
  const [navbarInside, navbarOutside] = useNavbar()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    filterStart()
    history.push("/room")
  }

  useEffect(() => {
    setFilterHandler({
      chat_type: filterChatType,
      grade: filterGrade,
      gender: filterGender,
      chat_feature: filterCommon,
      purpose: filterPurpose,
    })
  }, [
    filterChatType,
    filterGrade,
    filterGender,
    filterCommon,
    filterPurpose,
    setFilterHandler,
  ])

  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])

  const prevPageHandler = () => {
    filterEnd()
    history.goBack()
    navbarInside()
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
      <form className="filter__body" onSubmit={handleSubmit}>
        <div className="room-entity">
          <span className="room-entity__title">방 성격</span>
          <div className="room-entity__select">
            <input
              type="radio"
              name="chat_type"
              value="promise"
              id="promise"
              checked={filterChatType === "promise"}
              onChange={() => setFilterChatType("promise")}
            />
            <label htmlFor="promise">약속방</label>
            <input
              type="radio"
              name="chat_type"
              value="chat"
              id="chat"
              checked={filterChatType === "chat"}
              onChange={() => setFilterChatType("chat")}
            />
            <label htmlFor="chat">채팅방</label>
          </div>
        </div>
        <div className="room-grade">
          <span className="room-grade__title">학년</span>
          <div className="room-grade__select">
            <input
              type="radio"
              name="grade"
              value="no"
              id="no"
              checked={_.includes(filterGrade, "no")}
              onChange={() => setFilterGrade("no")}
            />
            <label htmlFor="no">제한 없음</label>
            <input
              type="radio"
              name="grade"
              value="my"
              id="my"
              checked={_.includes(filterGrade, `${userInfo.grade}`)}
              onChange={() => setFilterGrade(`${userInfo.grade}`)}
            />
            <label htmlFor="my">제한 있음(내 학년 포함)</label>
          </div>
        </div>

        <div className="user-gender">
          <span className="user-gender__title">성별</span>
          <div className="user-gender__select">
            <input
              type="radio"
              name="gender"
              value="nogender"
              id="nogender"
              checked={_.includes(filterGender, "nogender")}
              onChange={() => setFilterGender("nogender")}
            />
            <label htmlFor="nogender">상관 없음</label>
            <input
              type="radio"
              name="gender"
              value="men"
              id="men"
              checked={_.includes(filterGender, "men")}
              onChange={() => setFilterGender("men")}
            />
            <label htmlFor="men">남자끼리</label>
            <input
              type="radio"
              name="gender"
              value="women"
              id="women"
              checked={_.includes(filterGender, "women")}
              onChange={() => setFilterGender("women")}
            />
            <label htmlFor="women">여자끼리</label>
          </div>
        </div>
        <div className="user-common">
          <span className="user-common__title">공통점</span>
          <div className="user-common__select">
            <input
              type="radio"
              name="common"
              value="nocommon"
              id="nocommon"
              checked={_.includes(filterCommon, "nocommon")}
              onChange={() => setFilterCommon("nocommon")}
            />
            <label htmlFor="nocommon">제한 없음</label>
            <input
              type="radio"
              name="common"
              value="mbti"
              id="mbti"
              checked={_.includes(filterCommon, "mbti")}
              onChange={() => setFilterCommon("mbti")}
            />
            <label htmlFor="mbti">MBTI</label>
            <input
              type="radio"
              name="common"
              value="interest"
              id="interest"
              checked={_.includes(filterCommon, "interest")}
              onChange={() => setFilterCommon("interest")}
            />
            <label htmlFor="interest">관심사</label>
            <input
              type="radio"
              name="common"
              value="faculty"
              id="faculty"
              checked={_.includes(filterCommon, "faculty")}
              onChange={() => setFilterCommon("faculty")}
            />
            <label htmlFor="faculty">단과대</label>

            {_.includes(filterCommon, "mbti") &&
              !_.includes(filterCommon, "nocommon") && (
                <span className="common__text">
                  나와 MBTI가 비슷한 메이트들을 만날 수 있어요
                </span>
              )}
            {_.includes(filterCommon, "interest") &&
              !_.includes(filterCommon, "nocommon") && (
                <span className="common__text">
                  나와 관심사가 겹치는 메이트들을 만날 수 있어요
                </span>
              )}
            {_.includes(filterCommon, "faculty") &&
              !_.includes(filterCommon, "nocommon") && (
                <span className="common__text">
                  나와 같은 단과대학 소속 메이트들을 만날 수 있어요
                </span>
              )}
          </div>
        </div>
        <div className="meet-purpose">
          <span className="meet-purpose__title">
            <span>약속 목적</span>
            <span>(중복 가능)</span>
          </span>
          <div className="meet-purpose__select">
            <input
              type="checkbox"
              name="purpose"
              value="점심약속"
              id="점심약속"
              checked={_.includes(filterPurpose, "점심약속")}
              onChange={() =>
                setfilterPurpose((prev) => {
                  if (_.includes(prev, "점심약속")) {
                    return prev.filter((el) => el !== "점심약속")
                  } else if (_.includes(prev, "etc")) {
                    return ["점심약속"]
                  } else {
                    return [...prev, "점심약속"]
                  }
                })
              }
            />
            <label htmlFor="점심약속">점심약속</label>
            <input
              type="checkbox"
              name="purpose"
              value="보드게임"
              id="보드게임"
              checked={_.includes(filterPurpose, "보드게임")}
              onChange={() =>
                setfilterPurpose((prev) => {
                  if (_.includes(prev, "보드게임")) {
                    return prev.filter((el) => el !== "보드게임")
                  } else if (_.includes(prev, "etc")) {
                    return ["보드게임"]
                  } else {
                    return [...prev, "보드게임"]
                  }
                })
              }
            />
            <label htmlFor="보드게임">보드게임</label>
            <input
              type="checkbox"
              name="purpose"
              value="저녁약속"
              id="저녁약속"
              checked={_.includes(filterPurpose, "저녁약속")}
              onChange={() =>
                setfilterPurpose((prev) => {
                  if (_.includes(prev, "저녁약속")) {
                    return prev.filter((el) => el !== "저녁약속")
                  } else if (_.includes(prev, "etc")) {
                    return ["저녁약속"]
                  } else {
                    return [...prev, "저녁약속"]
                  }
                })
              }
            />
            <label htmlFor="저녁약속">저녁약속</label>
            <input
              type="checkbox"
              name="purpose"
              value="카페가기"
              id="카페가기"
              checked={_.includes(filterPurpose, "카페가기")}
              onChange={() =>
                setfilterPurpose((prev) => {
                  if (_.includes(prev, "카페가기")) {
                    return prev.filter((el) => el !== "카페가기")
                  } else if (_.includes(prev, "etc")) {
                    return ["카페가기"]
                  } else {
                    return [...prev, "카페가기"]
                  }
                })
              }
            />
            <label htmlFor="카페가기">카페가기</label>
            <input
              type="checkbox"
              name="purpose"
              value="방탈출"
              id="방탈출"
              checked={_.includes(filterPurpose, "방탈출")}
              onChange={() =>
                setfilterPurpose((prev) => {
                  if (_.includes(prev, "방탈출")) {
                    return prev.filter((el) => el !== "방탈출")
                  } else if (_.includes(prev, "etc")) {
                    return ["방탈출"]
                  } else {
                    return [...prev, "방탈출"]
                  }
                })
              }
            />
            <label htmlFor="방탈출">방탈출</label>
            <input
              type="checkbox"
              name="purpose"
              value="피씨방가기"
              id="피씨방가기"
              checked={_.includes(filterPurpose, "피씨방가기")}
              onChange={() =>
                setfilterPurpose((prev) => {
                  if (_.includes(prev, "피씨방가기")) {
                    return prev.filter((el) => el !== "피씨방가기")
                  } else if (_.includes(prev, "etc")) {
                    return ["피씨방가기"]
                  } else {
                    return [...prev, "피씨방가기"]
                  }
                })
              }
            />
            <label htmlFor="피씨방가기">피씨방가기</label>
            <input
              type="checkbox"
              name="purpose"
              value="기타"
              id="기타"
              checked={_.includes(filterPurpose, "etc")}
              onChange={() => setfilterPurpose(["etc"])}
            />
            <label htmlFor="기타">기타</label>
          </div>
        </div>

        <CustomButton width="320px" height="50px" inverse={true} type="submit">
          조건에 맞는 방 찾기
        </CustomButton>
      </form>
    </div>
  )
}

export default FilterPage
