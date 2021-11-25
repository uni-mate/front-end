import React from "react"
import { PromiseType } from "../../../../types/PromiseTypes"

import "./PromiseModal.css"

interface Props {
  closeModal: () => void
  promiseDesc: PromiseType
}

const PromiseModal = ({ closeModal, promiseDesc }: Props) => {
  return (
    <div className="promise-modal__container">
      <div className="promise-modal__title">{promiseDesc.promise_title}</div>
      <div className="promise-modal__detail">
        <div>{promiseDesc.promise_purpose}</div>
        <div>{promiseDesc.when_to_meet}</div>
        <div>{promiseDesc.where_to_meet}</div>
      </div>
      <div className="promise-modal__desc first">
        <div>설명</div>
        <div>{promiseDesc.promise_desc}</div>
      </div>
      <div className="promise-modal__desc">
        <div>참가자</div>
        <div>고니, 아이유, 조이</div>
      </div>
      <div className="promise-modal__button">
        <button onClick={closeModal}>설명창 닫기</button>
        <button onClick={() => alert("아직 구현되지 않았습니다!")}>
          약속에 참여할래요!
        </button>
      </div>
    </div>
  )
}

export default PromiseModal
