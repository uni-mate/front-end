import React, { Fragment, useEffect, useState } from "react"
import { PromiseType } from "../../../types/PromiseTypes"
import CustomButton from "../../Partials/CustomButton/CustomButton"

import _ from "lodash"

import BasicModal from "../../Partials/Modal/BasicModal"
import promiseFinish from "../../../assets/promise/promise-finish.png"

import "./PromiseDesc.css"
import { successCreatePromise } from "../../../redux/modules/promise"

interface Props {
  blockHandler: () => void
  setIdx: (idx: number) => void
  setAtr: (atr: string) => void
  desc: string
  promiseInfo: PromiseType
  setPromise: () => void
  loading: boolean
  closePromiseModal: () => void
  promiseModalState: boolean
}

const PromiseModal = () => {
  return (
    <div className="promise-modal">
      <img src={promiseFinish} alt="finish" />
      <div>약속이 등록되었어요!</div>
      <div>메이트들에게 약속 내용을 안내할게요</div>
    </div>
  )
}

const PromiseDesc = ({
  blockHandler,
  setIdx,
  setAtr,
  desc,
  promiseInfo,
  setPromise,
  loading,
  closePromiseModal,
  promiseModalState,
}: Props) => {
  const {
    where_to_meet,
    when_to_meet,
    promise_desc,
    promise_purpose,
    promise_title,
  } = promiseInfo
  const [detPromiseDesc, setDetPromiseDesc] = useState(desc === "" ? "" : desc)
  const [submitValid, setSubmitValid] = useState(false)
  useEffect(() => {
    setIdx(5)
    setAtr(detPromiseDesc)
  }, [setIdx, setAtr, detPromiseDesc])
  useEffect(() => {
    _.size(promise_desc) > 0 &&
    _.size(where_to_meet) > 0 &&
    _.size(promise_purpose) > 0 &&
    _.size(promise_title) > 0
      ? setSubmitValid(true)
      : setSubmitValid(false)
  }, [
    promise_desc,
    where_to_meet,
    promise_purpose,
    promise_title,
    setSubmitValid,
  ])
  const handleCreatePromise = () => {
    setPromise()
    blockHandler()
  }
  return (
    <Fragment>
      {
        <BasicModal
          isModalOpen={loading}
          width="0px"
          height="0px"
          backgroundColor="transparent"
          boxShadow={0}
          padding="0px"
        >
          <PromiseModal />
        </BasicModal>
      }
      <div className="promise-desc__container">
        <div className="promise-desc__title">
          <div>약속 내용을 설명해주세요</div>
        </div>
        <div className="promise-desc-input__container">
          <textarea
            rows={5}
            cols={100}
            name="desc"
            value={detPromiseDesc}
            onChange={(e) => setDetPromiseDesc(e.target.value)}
            placeholder="약속에 대해 자유롭게 적어주세요 (100자 이내)"
          ></textarea>
        </div>
        <div className="desc__button">
          <CustomButton
            width="85%"
            onClick={handleCreatePromise}
            inverse={submitValid}
            isDisabled={!submitValid}
          >
            완료하기
          </CustomButton>
        </div>
      </div>
    </Fragment>
  )
}

export default PromiseDesc
