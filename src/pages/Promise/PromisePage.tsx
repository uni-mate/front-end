import React, { Fragment, useEffect, useState } from "react"
import Carousel from "react-material-ui-carousel"
import { useHistory } from "react-router-dom"
import PromiseDescContainer from "../../components/CreatePromise/PromiseDesc/PromiseDescContainer"
import PromisePurposeContainer from "../../components/CreatePromise/PromisePurpose/PromisePurposeContainer"
import PromiseTitleContainer from "../../components/CreatePromise/PromiseTitle/PromiseTitleContainer"
import PromiseWhenContainer from "../../components/CreatePromise/PromiseWhen/PromiseWhenContainer"
import PromiseWhereContainer from "../../components/CreatePromise/PromiseWhere/PromiseWhereContainer"
import BasicModal from "../../components/Partials/Modal/BasicModal"
import useNavbar from "../../hooks/useNavbar"

import "./PromisePage.css"

interface ModalProps {
  closeModal: () => void
  closeAllModal: () => void
  handleConfirm: () => void
}

const StopModal = ({
  closeModal,
  closeAllModal,
  handleConfirm,
}: ModalProps) => {
  const closeAll = () => {
    handleConfirm()
    closeAllModal()
  }
  return (
    <div className="stop-modal__container">
      <div className="stop-modal__title">약속 정하기를 그만두시겠어요?</div>
      <div className="stop-modal__btn-container">
        <button onClick={closeAll}>네, 나갈래요</button>
        <button onClick={closeModal}>아니요, 계속할래요</button>
      </div>
    </div>
  )
}

interface Props {
  page: number
  promiseModalClose: () => void
}

const PromisePage = ({ page, promiseModalClose }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [blockControll, setBlockControll] = useState(true)
  const [height] = useState<string | number>(window.innerHeight)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const closeAllModal = () => {
    setIsModalOpen(false)
    promiseModalClose()
  }

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
          <StopModal
            closeAllModal={closeAllModal}
            closeModal={closeModal}
            handleConfirm={blockHandler}
          />
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
              <PromisePurposeContainer />
              <PromiseWhenContainer />
              <PromiseWhereContainer />
              <PromiseTitleContainer />
              <PromiseDescContainer blockHandler={blockHandler} />
            </Carousel>
            <div className="promise-detail__indicator">
              {page === 1 && <div className="indicator_1"></div>}
              {page === 2 && <div className="indicator_2"></div>}
              {page === 3 && <div className="indicator_3"></div>}
              {page === 4 && <div className="indicator_4"></div>}
              {page === 5 && <div className="indicator_5"></div>}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default PromisePage
