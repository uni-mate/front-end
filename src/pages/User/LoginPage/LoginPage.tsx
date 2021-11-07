import React from "react"

import GoBackArrow from "../../../assets/icons/attr/goback.png"
import useInput from "../../../hooks/useInput"
import CustomInput from "../../../components/Partials/CustomInput/CustomInput"
import CustomButton from "../../../components/Partials/CustomButton/CustomButton"
import { useHistory } from "react-router"

import "./LoginPage.css"

interface LoginReq {
  userId: string
  password: String
}

interface Props {
  loginSaga: (req: LoginReq) => void
}

const LoginPage = ({ loginSaga }: Props) => {
  const history = useHistory()
  const [{ userId, password }, onChange] = useInput({
    userId: "",
    password: "",
  })
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (userId.length === 0) {
      alert("사용자 이메일을 입력하세요.")
    } else if (userId.length > 0 && password.length === 0) {
      alert("비밀번호를 입력하세요.")
    } else {
      alert("아직 구현되지 않은 화면입니다.")
    }
    const body = {
      userId,
      password,
    }
    loginSaga(body)
  }
  return (
    <div className="login-container">
      <div className="login__header">
        <div className="login__header--icon" onClick={() => history.push("/")}>
          <img src={GoBackArrow} alt="뒤로가기" />
        </div>
      </div>
      <div className="login__body">
        <div className="login__title">UniMate</div>
        <form className="login-form__container" onSubmit={submitHandler}>
          <CustomInput
            type="text"
            id="userId"
            name="userId"
            value={userId}
            onChange={onChange}
            placeholder="아이디를 입력해 주세요."
          />
          <CustomInput
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="비밀번호를 입력해 주세요."
          />
          <CustomButton width="210px" height="33px" color="#fff" type="submit">
            로그인
          </CustomButton>
        </form>
      </div>
      <div className="login__etc">
        <span onClick={() => alert("아직 구현되지 않았습니다.")}>
          아이디 찾기
        </span>
        <span onClick={() => alert("아직 구현되지 않았습니다.")}>
          비밀번호 찾기
        </span>
        <span onClick={() => history.push("/auth/register")}>회원가입</span>
      </div>
    </div>
  )
}

export default LoginPage
