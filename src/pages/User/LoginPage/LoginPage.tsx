import React, { useEffect, useState } from "react"

import GoBackArrow from "../../../assets/icons/attr/goback.png"
import useInput from "../../../hooks/useInput"
import CustomInput from "../../../components/Partials/CustomInput/CustomInput"
import CustomButton from "../../../components/Partials/CustomButton/CustomButton"
import { useHistory } from "react-router"

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import VisibilityIcon from "@mui/icons-material/Visibility"

import "./LoginPage.css"
import useNavbar from "../../../hooks/useNavbar"

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
  const [pwdShow, setPwdShow] = useState(false)
  const [, navbarOutside] = useNavbar()
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (userId.length === 0) {
      alert("아이디를 입력해 주세요.")
    } else if (userId.length > 0 && password.length === 0) {
      alert("비밀번호를 입력해 주세요.")
    } else {
      const body = {
        userId,
        password,
      }
      loginSaga(body)
    }
  }
  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])
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
          <div className="login-form__pwd">
            <CustomInput
              type={pwdShow ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="비밀번호를 입력해 주세요."
            />
            <div
              className="eye-icon"
              onClick={() => setPwdShow((prev) => !prev)}
            >
              {!pwdShow ? (
                <VisibilityIcon fontSize="small" />
              ) : (
                <VisibilityOffIcon fontSize="small" />
              )}
            </div>
          </div>
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
