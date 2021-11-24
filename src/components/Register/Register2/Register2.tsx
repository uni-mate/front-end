import React, { useEffect, useState } from "react"
import useInput from "../../../hooks/useInput"
import CustomButton from "../../Partials/CustomButton/CustomButton"
import CustomInput from "./../../Partials/CustomInput/CustomInput"

import "./Register2.css"

interface Props {
  userIdHandler: (atr: string) => void
  userNickNameHandler: (atr: string) => void
  emailHandler: (atr: string) => void
  passwordHandler: (atr: string) => void
}

const Register2 = ({
  userIdHandler,
  userNickNameHandler,
  emailHandler,
  passwordHandler,
}: Props) => {
  const [registerValid, setRegisterValid] = useState(false)
  const [pwdConfirmValid, setPwdConfirmValid] = useState(false)
  const [{ userId, nickname, email, password, passwordConfirm }, onChange] =
    useInput({
      userId: "",
      nickname: "",
      email: "",
      password: "",
      passwordConfirm: "",
    })
  useEffect(() => {
    userIdHandler(userId)
    userNickNameHandler(nickname)
    emailHandler(email)
    passwordHandler(password)
  }, [
    userId,
    nickname,
    email,
    password,
    userIdHandler,
    userNickNameHandler,
    emailHandler,
    passwordHandler,
  ])
  useEffect(() => {
    password === passwordConfirm &&
    password.length > 1 &&
    passwordConfirm.length > 1
      ? setPwdConfirmValid(true)
      : setPwdConfirmValid(false)
  }, [password, passwordConfirm])
  useEffect(() => {
    userId.length > 1 &&
    nickname.length > 1 &&
    email.length > 1 &&
    pwdConfirmValid
      ? setRegisterValid(true)
      : setRegisterValid(false)
  }, [userId, nickname, email, pwdConfirmValid])
  return (
    <div className="register2__container">
      <CustomInput
        id="userId"
        name="userId"
        type="text"
        value={userId}
        placeholder="아이디를 입력해주세요"
        onChange={onChange}
      ></CustomInput>
      <CustomInput
        id="nickname"
        name="nickname"
        type="text"
        value={nickname}
        placeholder="닉네임을 입력해주세요"
        onChange={onChange}
      ></CustomInput>
      <CustomInput
        id="email"
        name="email"
        type="email"
        value={email}
        placeholder="이메일을 입력해주세요"
        onChange={onChange}
      ></CustomInput>
      <CustomInput
        id="password"
        name="password"
        type="password"
        value={password}
        placeholder="비밀번호를 입력해주세요"
        onChange={onChange}
      ></CustomInput>
      <CustomInput
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        value={passwordConfirm}
        placeholder="비밀번호를 확인해주세요"
        onChange={onChange}
      ></CustomInput>
    </div>
  )
}

export default Register2
