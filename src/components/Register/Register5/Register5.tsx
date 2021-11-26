import React, { useEffect, useState } from "react"
import useInput from "../../../hooks/useInput"
import CustomInput from "../../Partials/CustomInput/CustomInput"

import "./Register5.css"
import { RegisterData } from "../../../types/RegisterTypes"
import CustomButton from "../../Partials/CustomButton/CustomButton"

import _ from "lodash"

interface Props {
  registerInfo: RegisterData
  setAtr1: (req: String) => void
  setAtr2: (req: String) => void
  setAtr3: (req: String) => void
  setAtr4: (req: String) => void
}

const Register5 = ({
  registerInfo,
  setAtr1,
  setAtr2,
  setAtr3,
  setAtr4,
}: Props) => {
  const [{ username, year, month, day, introducing }, onChange] = useInput({
    username: registerInfo.user_name ? registerInfo.user_name : "",
    year: "",
    month: "",
    day: "",
    introducing: registerInfo.introducing ? registerInfo.introducing : "",
  })
  const [gender, setGender] = useState<string>(
    registerInfo.gender ? registerInfo.gender : ""
  )
  const [birthOfDate, setBirthOfDate] = useState<string>(
    registerInfo.birdh_of_date ? registerInfo.birdh_of_date : ""
  )
  useEffect(() => {
    setBirthOfDate(`${year} ${month} ${day}`)
  }, [year, month, day])
  useEffect(() => {
    setAtr1(username)
    setAtr2(birthOfDate)
    setAtr3(introducing)
    setAtr4(gender)
  }, [
    setAtr1,
    setAtr2,
    setAtr3,
    setAtr4,
    username,
    birthOfDate,
    introducing,
    gender,
  ])
  const [registerValid, setRegisterValid] = useState(true)
  const [mbtiValid, setMbtiValid] = useState(false)
  useEffect(() => {
    _.size(registerInfo.mbti.first_mbti) > 0 &&
      _.size(registerInfo.mbti.second_mbti) > 0 &&
      _.size(registerInfo.mbti.third_mbti) > 0 &&
      _.size(registerInfo.mbti.fourth_mbti) > 0 &&
      setMbtiValid(true)
  }, [registerInfo.mbti])
  useEffect(() => {
    _.size(registerInfo.user_name) > 0 && _.size(registerInfo.birdh_of_date)
    _.size(registerInfo.introducing) > 0 &&
      _.size(registerInfo.user_nickname) > 0 &&
      _.size(registerInfo.user_id) > 0 &&
      _.size(registerInfo.school) > 0 &&
      _.size(registerInfo.password) > 0 &&
      mbtiValid &&
      _.size(registerInfo.interest) > 0 &&
      _.size(registerInfo.grade) > 0 &&
      _.size(registerInfo.grade) > 0 &&
      _.size(registerInfo.email) > 0 &&
      _.size(registerInfo.department) > 0 &&
      _.size(registerInfo.birdh_of_date) > 0 &&
      setRegisterValid(true)
  }, [registerInfo, mbtiValid])
  return (
    <div className="register5__container">
      <CustomInput
        id="username"
        name="username"
        type="text"
        value={username}
        placeholder="이름을 입력해주세요"
        onChange={onChange}
      ></CustomInput>
      <div className="birth__container">
        <CustomInput
          id="year"
          name="year"
          type="text"
          value={year}
          placeholder="생년"
          onChange={onChange}
          width="40%"
        ></CustomInput>
        <CustomInput
          id="month"
          name="month"
          type="text"
          value={month}
          placeholder="월"
          onChange={onChange}
          width="28%"
        ></CustomInput>
        <CustomInput
          id="day"
          name="day"
          type="text"
          value={day}
          placeholder="일"
          onChange={onChange}
          width="28%"
        ></CustomInput>
      </div>
      <CustomInput
        id="intro"
        name="introducing"
        type="text"
        value={introducing}
        placeholder="자기소개를 입력해주세요"
        onChange={onChange}
      ></CustomInput>
      <div className="register5__gender">
        <input
          type="radio"
          name="gender"
          value={gender}
          id="men"
          checked={gender === "men"}
          onChange={() => setGender("men")}
        />
        <label htmlFor="men">남자에요</label>
        <input
          type="radio"
          name="gender"
          value={gender}
          id="women"
          checked={gender === "women"}
          onChange={() => setGender("women")}
        />
        <label htmlFor="women">여자에요</label>
      </div>
      <CustomButton
        width="180px"
        inverse={registerValid}
        isDisabled={registerValid}
      >
        완료
      </CustomButton>
    </div>
  )
}

export default Register5
