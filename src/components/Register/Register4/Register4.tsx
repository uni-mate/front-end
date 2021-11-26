import React, { Fragment, useEffect, useState } from "react"

import InterestData from "./InterestData"
import BasicModal from "../../Partials/Modal/BasicModal"

import _ from "lodash"

import "./Register4.css"

interface ModalProps {
  closeModal: () => void
}

const StopModal = ({ closeModal }: ModalProps) => {
  return (
    <div className="stop-modal__container">
      <div className="stop-modal__title interest">
        <div>관심사는 최대 7개까지</div>
        <div>선택 가능합니다</div>
      </div>
      <div className="stop-modal__btn-container interest">
        <button onClick={closeModal}>확인</button>
      </div>
    </div>
  )
}

interface Props {
  registerInterest: string[]
  setAtr: (req: string[]) => void
}

export const Register4 = ({ registerInterest, setAtr }: Props) => {
  const [interestValue, setInterestValue] = useState<string[]>(
    registerInterest ? registerInterest : []
  )
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(() => {
    _.size(interestValue) > 7 && setIsModalOpen(true)
    if (_.size(interestValue) === 8) {
      interestValue.pop()
    }
  }, [interestValue])
  useEffect(() => {
    setAtr(interestValue)
  }, [setAtr, interestValue])
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
          <StopModal closeModal={() => setIsModalOpen(false)} />
        </BasicModal>
      )}

      <div className="register4__container">
        <div className="register4__title">관심사를 선택해주세요</div>
        <div className="register4__content">
          {InterestData.map((el) => (
            <Fragment key={el.key}>
              <input
                type="checkbox"
                name="interest"
                className="interest__hash"
                id={el.key}
                onChange={() =>
                  _.size(interestValue) < 8 &&
                  setInterestValue((prev) => {
                    if (_.includes(prev, el.name)) {
                      // 체크 해제
                      return prev.filter((p) => p !== el.name)
                    } else {
                      return [...prev, el.name]
                    }
                  })
                }
                checked={_.includes(interestValue, el.name)}
              />
              <label htmlFor={el.key}>{el.name}</label>
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  )
}
