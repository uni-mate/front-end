import React, { Fragment, useEffect, useRef, useState } from "react"
import { useHistory } from "react-router"
import useNavbar from "../../../hooks/useNavbar"
// import bgImg from "../../../assets/icons/createroom/빼꼼이.png"
import Carousel from "react-material-ui-carousel"

import ChatTypeContainer from "./../../../components/Room/CreateRoomComponents/ChatType/ChatTypeContainer"
import PurposeContainer from "../../../components/Room/CreateRoomComponents/Purpose/PurposeContainer"
import GradeContainer from "../../../components/Room/CreateRoomComponents/Grade/GradeContainer"
import HeadCountContainer from "../../../components/Room/CreateRoomComponents/HeadCount/HeadCountContainer"
import GenderContainer from "../../../components/Room/CreateRoomComponents/Gender/GenderContainer"
// import CommonTypeContainer from "../../../components/Room/CreateRoomComponents/CommonType/CommonTypeContainer"
import RoomTitleContainer from "../../../components/Room/CreateRoomComponents/RoomTitle/RoomTitleContainer"
import RoomDescContainer from "../../../components/Room/CreateRoomComponents/RoomDesc/RoomDescContainer"

import BasicModal from "../../../components/Partials/Modal/BasicModal"
import { CreateRoomState } from "../../../types/types"

import "./CreateRoomDetailPage.css"

interface ModalProps {
  closeModal: () => void
  handleConfirm?: () => void
}

const StopModal = ({ closeModal, handleConfirm }: ModalProps) => {
  return (
    <div className="stop-modal__container">
      <div className="stop-modal__title">방 만들기를 그만두시겠어요?</div>
      <div className="stop-modal__btn-container">
        <button onClick={handleConfirm}>네, 나갈래요</button>
        <button onClick={closeModal}>아니요, 계속할래요</button>
      </div>
    </div>
  )
}

interface Props {
  createState: CreateRoomState
}

const CreateRoomDetailPage = ({ createState }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [height, setHeight] = useState<string | number>(window.innerHeight)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const unblockHandle = useRef<any>()

  const history = useHistory()
  const [, navbarOutside] = useNavbar()

  function handleConfirm() {
    if (unblockHandle) {
      unblockHandle.current()
    }
    history.goBack()
  }

  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])

  useEffect(() => {
    unblockHandle.current = history.block((location: any) => {
      openModal()
      return false
    })
    return function () {
      unblockHandle.current.current && unblockHandle.current.current()
    }
  }, [history])

  return (
    <Fragment>
      {isModalOpen && (
        <BasicModal isModalOpen={isModalOpen} width="300px">
          <StopModal closeModal={closeModal} handleConfirm={handleConfirm} />
        </BasicModal>
      )}
      <div className="create-detail" style={{ height: height }}>
        <div className="create-detail__header"></div>
        <div className="create-detail__body">
          {/* <div className="create-detail__body--img">
            <img src={bgImg} alt="backimg" />
          </div> */}
          <div className="create-detail__components">
            <Carousel
              autoPlay={false}
              animation={"fade"}
              cycleNavigation={false}
              swipe={false}
              indicators={false}
              navButtonsAlwaysVisible={true}
              className="create-detail__components--carousel"
            >
              <ChatTypeContainer />
              <PurposeContainer />
              <GradeContainer />
              <HeadCountContainer />
              <GenderContainer />
              {/* <CommonTypeContainer /> */}
              <RoomTitleContainer />
              <RoomDescContainer />
            </Carousel>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CreateRoomDetailPage
