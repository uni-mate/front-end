import React, { useEffect, useState } from "react"

import GoBackArrow from "../../../assets/icons/attr/goback.png"
import useInput from "../../../hooks/useInput"
import { useHistory } from "react-router"

import CustomButton from "../../../components/Partials/CustomButton/CustomButton"
import CustomInput from "../../../components/Partials/CustomInput/CustomInput"

import "./RegisterPage.css"

interface RegisterReq {
  username: string
  email: string
  password: String
}

interface Props {
  registerSaga: (req: RegisterReq) => void
}

const RegisterPage = ({ registerSaga }: Props) => {
  const history = useHistory()
  const [isUsername, setIsUsername] = useState(true)
  const [isEmail, setIsEmail] = useState(true)
  const [isPwd, setIsPwd] = useState(true)
  const [isPwdConfirm, setIsPwdConfirm] = useState(true)
  const [disable, setDisable] = useState(false)
  const [startEnter, setStartEnter] = useState(false)
  const [
    { school, department, userId, email, password, username, introducing },
    onChange,
    emailValid,
    passwordValid,
  ] = useInput({
    school: "",
    department: "",
    userId: "",
    email: "",
    password: "",
    username: "",
    introducing: "",
  })
  const submitHandler = (e: React.FormEvent) => {
    setStartEnter(true)
    e.preventDefault()
    alert("아직 구현되지 않은 화면입니다.")
    const body = {
      school,
      department,
      userId,
      email,
      password,
      username,
      introducing,
    }
    registerSaga(body)
  }
  // 회원가입 유효성 검사
  // useEffect(() => {
  //   if (startEnter) {
  //     username.length > 2 ? setIsUsername(true) : setIsUsername(false)
  //     emailValid(email) ? setIsEmail(true) : setIsEmail(false)
  //     passwordValid(password) ? setIsPwd(true) : setIsPwd(false)
  //     password === passwordComfirm
  //       ? setIsPwdConfirm(true)
  //       : setIsPwdConfirm(false)
  //     isUsername && isEmail && isPwd && isPwd === isPwdConfirm
  //       ? setDisable(false)
  //       : setDisable(true)
  //   }
  // }, [
  //   startEnter,
  //   username.length,
  //   email,
  //   password,
  //   isUsername,
  //   isEmail,
  //   isPwd,
  //   isPwdConfirm,
  //   passwordComfirm,
  //   emailValid,
  //   passwordValid,
  // ])
  let userHelper = !isUsername ? "이름은 두 글자 이상이어야 합니다." : ""
  let emailHelper = !isEmail ? "유효한 이메일 형식이 아닙니다." : ""
  let pwdHelper = !isPwd
    ? "비밀번호는 숫자와 문자를 조합하여 8자 이상이어야 합니다."
    : ""
  let pwdConfirmHelper = !isPwdConfirm ? "비밀번호가 일치하지 않습니다." : ""
  return (
    <div className="register-container">
      <div className="login__header">
        <div className="login__header--icon" onClick={() => history.push("/")}>
          <img src={GoBackArrow} alt="뒤로가기" />
        </div>
      </div>
      <div className="register__body">
        <div className="register__title">UniMate</div>
        <form className="register-form__container" onSubmit={submitHandler}>
          <CustomInput
            type="input"
            id="school"
            name="school"
            value={school}
            onChange={onChange}
            placeholder="학교를 선택해주세요."
          />
          <CustomInput
            type="input"
            id="department"
            name="department"
            value={department}
            onChange={onChange}
            placeholder="학과를 선택해주세요."
          />
          <CustomInput
            type="input"
            id="userId"
            name="userId"
            value={userId}
            onChange={onChange}
            placeholder="아이디를 입력해주세요."
          />
          <CustomInput
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="이메일을 입력해주세요."
          />
          <CustomInput
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="비밀번호를 입력해주세요."
          />
          <CustomInput
            type="username"
            id="username"
            name="username"
            value={username}
            onChange={onChange}
            placeholder="닉네임을 입력해주세요."
          />
          <CustomInput
            type="usernamintroducing"
            id="introducing"
            name="introducing"
            value={introducing}
            onChange={onChange}
            placeholder="자기소개를 입력해주세요 (30자 제한)."
          />
          <CustomButton type="submit" width="210px" height="33px" color="#fff">
            회원가입
          </CustomButton>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
