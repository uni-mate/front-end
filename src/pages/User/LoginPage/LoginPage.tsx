import React, { Fragment, useEffect, useState } from "react"

import GoBackArrow from "../../../assets/icons/attr/goback.png"
import useInput from "../../../hooks/useInput"
import CustomInput from "../../../components/Partials/CustomInput/CustomInput"
import CustomButton from "../../../components/Partials/CustomButton/CustomButton"
import { useHistory } from "react-router"

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import VisibilityIcon from "@mui/icons-material/Visibility"

import useNavbar from "../../../hooks/useNavbar"
import AuthModal from "../../../components/Partials/Modal/AuthModal/AuthModal"
import BasicModal from "../../../components/Partials/Modal/BasicModal"

import logo from "../../../assets/logo/logo.png"
import "./LoginPage.css"

interface LoginReq {
  userId: string
  password: String
}

interface Props {
  loginSaga: (req: LoginReq) => void
  error: any
}

const LoginPage = ({ loginSaga, error }: Props) => {
  const history = useHistory()
  const [{ userId, password }, onChange] = useInput({
    userId: "",
    password: "",
  })
  const [pwdShow, setPwdShow] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [, navbarOutside] = useNavbar()
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const body = {
      userId,
      password,
    }
    !error ? loginSaga(body) : setIsModalOpen(true)
  }
  useEffect(() => {
    userId.length > 2 && password.length > 2
      ? setIsDisabled(false)
      : setIsDisabled(true)
  }, [userId, password])
  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])
  return (
    <Fragment>
      {isModalOpen && (
        <BasicModal
          isModalOpen={isModalOpen}
          width="250px"
          backgroundColor="#fff"
          boxShadow={24}
          padding="30px 20px 15px 20px"
        >
          <AuthModal closeModal={() => setIsModalOpen(false)} />
        </BasicModal>
      )}
      <div className="login-container">
        <div className="login__header">
          <div
            className="login__header--icon"
            onClick={() => history.push("/")}
          >
            <img src={GoBackArrow} alt="뒤로가기" />
          </div>
        </div>
        <div className="login__body">
          <div className="login__title">
            <img src={logo} alt="로고" />
          </div>
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
                  <VisibilityIcon fontSize="small" className="eye-color" />
                ) : (
                  <VisibilityOffIcon fontSize="small" className="eye-color" />
                )}
              </div>
            </div>
            {isDisabled ? (
              <CustomButton
                width="210px"
                height="41px"
                type="submit"
                isDisabled={true}
              >
                로그인
              </CustomButton>
            ) : (
              <CustomButton
                width="210px"
                height="41px"
                type="submit"
                inverse={true}
                isDisabled={false}
              >
                로그인
              </CustomButton>
            )}
          </form>
        </div>
        <div className="login__etc">
          <span onClick={() => alert("아직 구현되지 않았습니다.")}>
            아이디 찾기
          </span>
          <span onClick={() => alert("아직 구현되지 않았습니다.")}>
            비밀번호 찾기
          </span>
        </div>
        <div className="login-to-register">
          <div>아직 유니메이트의 회원이 아니신가요?</div>
          <span onClick={() => history.push("/auth/register")}>회원가입</span>
        </div>
      </div>
    </Fragment>
  )
}

export default LoginPage
