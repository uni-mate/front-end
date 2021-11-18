import React, { useEffect, useState } from "react"

import GoBackArrow from "../../../assets/icons/attr/goback.png"
import useInput from "../../../hooks/useInput"
import { useHistory } from "react-router"

import CustomButton from "../../../components/Partials/CustomButton/CustomButton"
import CustomInput from "../../../components/Partials/CustomInput/CustomInput"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import VisibilityIcon from "@mui/icons-material/Visibility"

import "./RegisterPage.css"
import useNavbar from "../../../hooks/useNavbar"

interface RegisterReq {
  username: string
  email: string
  password: String
}

interface Props {
  registerSaga: (req: RegisterReq) => void
}

const RegisterPage = ({ registerSaga }: Props) => {
  const [pwdShow, setPwdShow] = useState(false)
  const [, navbarOutside] = useNavbar()
  const history = useHistory()
  // const [isUsername, setIsUsername] = useState(true)
  // const [isEmail, setIsEmail] = useState(true)
  // const [isPwd, setIsPwd] = useState(true)
  // const [isPwdConfirm, setIsPwdConfirm] = useState(true)
  // const [disable, setDisable] = useState(false)
  const [, setStartEnter] = useState(false)
  const [
    { school, department, userId, email, password, username, introducing },
    onChange,
    // emailValid,
    // passwordValid,
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
    alert("회원가입에 성공하였지만 아직 사용할 수 없습니다.")
    // const body = {
    //   school,
    //   department,
    //   userId,
    //   email,
    //   password,
    //   username,
    //   introducing,
    // }
    // registerSaga(body)
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
  // let userHelper = !isUsername ? "이름은 두 글자 이상이어야 합니다." : ""
  // let emailHelper = !isEmail ? "유효한 이메일 형식이 아닙니다." : ""
  // let pwdHelper = !isPwd
  //   ? "비밀번호는 숫자와 문자를 조합하여 8자 이상이어야 합니다."
  //   : ""
  // let pwdConfirmHelper = !isPwdConfirm ? "비밀번호가 일치하지 않습니다." : ""
  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])
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
          <div className="register-form__pwd">
            <CustomInput
              type={pwdShow ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="비밀번호를 입력해주세요."
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
          <CustomInput
            type="username"
            id="username"
            name="username"
            value={username}
            onChange={onChange}
            placeholder="닉네임을 입력해주세요."
          />
          {/* <div className="gender-input__container">
            <input
              type="radio"
              name="gender"
              id="no"
              value="no"
              onChange={handleChange}
              checked={detGender === "no" ? true : false}
            ></input>
            <label htmlFor="no">
              <div>상관없어요</div>
            </label>
            <input
              type="radio"
              name="gender"
              id="women"
              value="women"
              onChange={handleChange}
              checked={detGender === "women" ? true : false}
            ></input>
            <label htmlFor="women">
              <div>여자끼리</div>
            </label>
            <input
              type="radio"
              name="gender"
              id="men"
              value="men"
              onChange={handleChange}
              checked={detGender === "men" ? true : false}
            ></input>
            <label htmlFor="men">
              <div>남자끼리</div>
            </label>
          </div> */}
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
