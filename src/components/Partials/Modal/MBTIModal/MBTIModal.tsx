import React, { useState } from "react"
import { CreateRoomCommonState } from "../../../../types/CreateRoomTypes"

import _ from "lodash"

import "./MBTIModal.css"

interface MBTI {
  first_mbti: string
  second_mbti: string
  third_mbti: string
  fourth_mbti: string
}

interface Props {
  closeModal: () => void
  handleMBTI: (mbtiProps: MBTI) => void
  commonState: CreateRoomCommonState
  userMBTI: MBTI
}

const MBTIModal = ({
  closeModal,
  handleMBTI,
  commonState,
  userMBTI,
}: Props) => {
  const [checkedInputs, setCheckedInputs] = useState({
    first_mbti:
      _.size(commonState?.mbti.first_mbti) !== 0
        ? commonState?.mbti.first_mbti
        : "_",
    second_mbti:
      _.size(commonState?.mbti.second_mbti) !== 0
        ? commonState?.mbti.second_mbti
        : "_",
    third_mbti:
      _.size(commonState?.mbti.third_mbti) !== 0
        ? commonState?.mbti.third_mbti
        : "_",
    fourth_mbti:
      _.size(commonState?.mbti.fourth_mbti) !== 0
        ? commonState?.mbti.fourth_mbti
        : "_",
  })

  const changeHandler = (value: string, checked: boolean, order: string) => {
    if (checked) {
      setCheckedInputs((prev) => ({
        ...prev,
        [order]: value,
      }))
    } else {
      setCheckedInputs((prev) => ({
        ...prev,
        [order]: "_",
      }))
    }
  }

  const offMBTI = () => {
    closeModal()
  }

  const onMBTI = () => {
    handleMBTI(checkedInputs)
    closeModal()
  }

  return (
    <div className="mbti-modal">
      <div className="mbti-modal__title">공통 MBTI 선택</div>
      <div className="mbti-modal__content">
        <div className="mbti-modal__content--radio">
          <div className="mbti">
            <input
              type="checkbox"
              id={userMBTI.first_mbti}
              name="mbti"
              value={userMBTI.first_mbti}
              onChange={(e) =>
                changeHandler(
                  e.target.value,
                  e.currentTarget.checked,
                  "first_mbti"
                )
              }
              checked={checkedInputs.first_mbti === "_" ? false : true}
            />
            <label htmlFor={userMBTI.first_mbti}>{userMBTI.first_mbti}</label>
          </div>
          <div className="mbti">
            <input
              type="checkbox"
              id={userMBTI.second_mbti}
              name="mbti"
              value={userMBTI.second_mbti}
              onChange={(e) =>
                changeHandler(
                  e.target.value,
                  e.currentTarget.checked,
                  "second_mbti"
                )
              }
              checked={checkedInputs.second_mbti === "_" ? false : true}
            />
            <label htmlFor={userMBTI.second_mbti}>{userMBTI.second_mbti}</label>
          </div>
          <div className="mbti">
            <input
              type="checkbox"
              id={userMBTI.third_mbti}
              name="mbti"
              value={userMBTI.third_mbti}
              onChange={(e) =>
                changeHandler(
                  e.target.value,
                  e.currentTarget.checked,
                  "third_mbti"
                )
              }
              checked={checkedInputs.third_mbti === "_" ? false : true}
            />
            <label htmlFor={userMBTI.third_mbti}>{userMBTI.third_mbti}</label>
          </div>
          <div className="mbti">
            <input
              type="checkbox"
              id={userMBTI.fourth_mbti}
              name="mbti"
              value={userMBTI.fourth_mbti}
              onChange={(e) =>
                changeHandler(
                  e.target.value,
                  e.currentTarget.checked,
                  "fourth_mbti"
                )
              }
              checked={checkedInputs.fourth_mbti === "_" ? false : true}
            />
            <label htmlFor={userMBTI.fourth_mbti}>{userMBTI.fourth_mbti}</label>
          </div>
        </div>
        <div className="mbti-modal__content--desc">
          <div>
            MBTI가 {checkedInputs.first_mbti}
            {checkedInputs.second_mbti}
            {checkedInputs.third_mbti}
            {checkedInputs.fourth_mbti}인
          </div>
          <span>메이트들만 들어올 수 있어요</span>
        </div>
      </div>
      <div className="mbti-modal__button">
        <button onClick={offMBTI}>뒤로가기</button>
        <button onClick={onMBTI}>선택완료</button>
      </div>
    </div>
  )
}

export default MBTIModal
