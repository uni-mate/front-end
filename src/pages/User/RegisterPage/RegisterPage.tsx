import React, { useEffect } from "react"

import GoBackArrow from "../../../assets/icons/attr/goback.png"
import { useHistory } from "react-router"
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
// import VisibilityIcon from "@mui/icons-material/Visibility"

import useNavbar from "../../../hooks/useNavbar"
import Carousel from "react-material-ui-carousel"

import Register1Container from "../../../components/Register/Register1/Register1Container"
import Register2Container from "../../../components/Register/Register2/Register2Container"
import Register3Container from "../../../components/Register/Register3/Register3Container"
import Register4Container from "../../../components/Register/Register4/Register4Container"
import Register5Container from "../../../components/Register/Register5/Register5Container"
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
  // const [pwdShow, setPwdShow] = useState(false)
  const [, navbarOutside] = useNavbar()
  const history = useHistory()

  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])
  return (
    <div className="register-container">
      <div className="register__header">
        <div
          className="register__header--icon"
          onClick={() => history.push("/")}
        >
          <img src={GoBackArrow} alt="뒤로가기" />
        </div>
        <span>회원가입</span>
      </div>
      <div className="register__body">
        <Carousel
          autoPlay={false}
          animation={"fade"}
          cycleNavigation={false}
          swipe={false}
          navButtonsAlwaysInvisible={true}
          timeout={300}
          indicators={true}
          className="register__components--carousel"
          indicatorContainerProps={{
            className: "register-indicator__container",
          }}
          indicatorIconButtonProps={{
            className: "register-indicator__button",
            style: {
              pointerEvents: "none",
            },
          }}
          activeIndicatorIconButtonProps={{
            className: "register-indicator__button-active",
          }}
        >
          <Register1Container />
          <Register2Container />
          <Register3Container />
          <Register4Container />
          <Register5Container />
        </Carousel>
      </div>
    </div>
  )
}

export default RegisterPage

// <div className="register-form__pwd">
//   <CustomInput
//     type={pwdShow ? "text" : "password"}
//     id="password"
//     name="password"
//     value={password}
//     onChange={onChange}
//     placeholder="비밀번호를 입력해주세요."
//   />
//   <div
//     className="eye-icon"
//     onClick={() => setPwdShow((prev) => !prev)}
//   >
//     {!pwdShow ? (
//       <VisibilityIcon fontSize="small" />
//     ) : (
//       <VisibilityOffIcon fontSize="small" />
//     )}
//   </div>
// </div>
