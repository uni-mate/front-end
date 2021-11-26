import React, { Fragment, useEffect, useState } from "react"

import useNavbar from "../../../hooks/useNavbar"
import Carousel from "react-material-ui-carousel"
import { useHistory } from "react-router-dom"

import Register1Container from "../../../components/Register/Register1/Register1Container"
import Register2Container from "../../../components/Register/Register2/Register2Container"
import Register3Container from "../../../components/Register/Register3/Register3Container"
import Register4Container from "../../../components/Register/Register4/Register4Container"
import Register5Container from "../../../components/Register/Register5/Register5Container"
import "./RegisterPage.css"
import BasicModal from "../../../components/Partials/Modal/BasicModal"

interface ModalProps {
  closeModal: () => void
  handleConfirm: () => void
}

const StopModal = ({ closeModal, handleConfirm }: ModalProps) => {
  const history = useHistory()
  const onGoBack = () => {
    handleConfirm()
    closeModal()
    history.goBack()
  }
  return (
    <div className="stop-modal__container">
      <div className="stop-modal__title">회원가입을 그만두시겠어요?</div>
      <div className="stop-modal__btn-container">
        <button onClick={onGoBack}>네, 나갈래요</button>
        <button onClick={closeModal}>아니요, 계속할래요</button>
      </div>
    </div>
  )
}

interface RegisterReq {
  username: string
  email: string
  password: String
}

interface Props {
  registerSaga: (req: RegisterReq) => void
}

const RegisterPage = ({ registerSaga }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [blockControll, setBlockControll] = useState(true)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const [, navbarOutside] = useNavbar()
  const history = useHistory()

  const blockHandler = () => setBlockControll(false)

  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])

  useEffect(() => {
    const unblock = history.block((location, action) => {
      if (blockControll && action === "POP") {
        openModal()
        console.log("#### blocked ####")
        return false
      }
    })
    return () => unblock()
  }, [history, blockControll])
  return (
    <Fragment>
      {isModalOpen && (
        <BasicModal
          isModalOpen={isModalOpen}
          width="300px"
          backgroundColor="#fff"
          boxShadow={24}
          padding="30px 20px"
        >
          <StopModal closeModal={closeModal} handleConfirm={blockHandler} />
        </BasicModal>
      )}
      <div className="register-container">
        {/* <div className="register__header">
        <div
        className="register__header--icon"
        onClick={() => history.push("/")}
        >
          <img src={GoBackArrow} alt="뒤로가기" />
          </div>
          <span>회원가입</span>
        </div> */}
        <div className="register__body">
          <Carousel
            autoPlay={false}
            animation={"fade"}
            cycleNavigation={false}
            // swipe={false}
            // navButtonsAlwaysInvisible={true}
            timeout={300}
            indicators={true}
            className="register__components--carousel"
            indicatorContainerProps={{
              className: "register-indicator__container",
            }}
            indicatorIconButtonProps={{
              className: "register-indicator__button",
              // style: {
              //   pointerEvents: "none",
              // },
            }}
            navButtonsWrapperProps={{
              className: "register-navbutton__button-wrapper",
            }}
            navButtonsProps={{
              className: "register-navbutton__button",
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
    </Fragment>
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
