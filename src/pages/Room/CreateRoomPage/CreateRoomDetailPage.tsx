import React, { Fragment, useEffect, useState } from "react"
import { useHistory } from "react-router"
import useNavbar from "../../../hooks/useNavbar"
import Carousel from "react-material-ui-carousel"

import ChatTypeContainer from "./../../../components/Room/CreateRoomComponents/ChatType/ChatTypeContainer"
import PurposeContainer from "../../../components/Room/CreateRoomComponents/Purpose/PurposeContainer"
import GradeContainer from "../../../components/Room/CreateRoomComponents/Grade/GradeContainer"
import HeadCountContainer from "../../../components/Room/CreateRoomComponents/HeadCount/HeadCountContainer"
import GenderContainer from "../../../components/Room/CreateRoomComponents/Gender/GenderContainer"
import CommonTypeContainer from "../../../components/Room/CreateRoomComponents/CommonType/CommonTypeContainer"
import RoomTitleContainer from "../../../components/Room/CreateRoomComponents/RoomTitle/RoomTitleContainer"
import RoomDescContainer from "../../../components/Room/CreateRoomComponents/RoomDesc/RoomDescContainer"

import BasicModal from "../../../components/Partials/Modal/BasicModal"
import { CreateRoomState } from "../../../types/types"

import "./CreateRoomDetailPage.css"

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
      <div className="stop-modal__title">방 만들기를 그만두시겠어요?</div>
      <div className="stop-modal__btn-container">
        <button onClick={onGoBack}>네, 나갈래요</button>
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
  const [blockControll, setBlockControll] = useState(true)
  const [height] = useState<string | number>(window.innerHeight)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const history = useHistory()
  const [, navbarOutside] = useNavbar()

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
      <div className="create-detail" style={{ height: height }}>
        <div className="create-detail__header"></div>
        <div className="create-detail__body">
          <div className="create-detail__components">
            <Carousel
              autoPlay={false}
              animation={"fade"}
              cycleNavigation={false}
              swipe={false}
              navButtonsAlwaysVisible={true}
              timeout={300}
              indicators={true}
              className="create-detail__components--carousel"
            >
              <ChatTypeContainer />
              <PurposeContainer />
              <GradeContainer />
              <HeadCountContainer />
              <GenderContainer />
              <CommonTypeContainer />
              <RoomTitleContainer />
              <RoomDescContainer blockHandler={blockHandler} />
            </Carousel>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CreateRoomDetailPage
