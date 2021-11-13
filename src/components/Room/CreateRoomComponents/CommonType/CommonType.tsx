import React, { Fragment, useEffect, useState } from "react"
import { CreateRoomCommonState, MBTI, UserState } from "../../../../types/types"
import BasicModal from "../../../Partials/Modal/BasicModal"
import MBTIModal from "../../../Partials/Modal/MBTIModal/MBTIModal"

import "./CommonType.css"

interface Props {
  commonState: CreateRoomCommonState
  currentUserState: UserState
  setAtrMBTI: (mbti: MBTI) => void
  setAtrInterest: (interest: string[]) => void
  setAtrFaculty: (faculty: string) => void
  setAtrNoMatter: (det: boolean) => void
  setIdx: (idx: number) => void
}

const CommonType = ({
  commonState,
  currentUserState,
  setAtrMBTI,
  setAtrInterest,
  setAtrFaculty,
  setAtrNoMatter,
  setIdx,
}: Props) => {
  const resetMBTI = {
    first_mbti: "",
    second_mbti: "",
    third_mbti: "",
    fourth_mbti: "",
  }
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => setIsModalOpen(false)
  const openModal = () => setIsModalOpen(true)
  const [checkAtr, setCheckAtr] = useState({
    check_mbti: commonState?.mbti === resetMBTI ? true : false,
    check_interest: commonState?.interest === [] ? true : false,
    check_faculty: commonState?.faculty !== "" ? true : false,
    check_noMatter: commonState?.nomatter === true ? true : false,
  })
  // mbti 체크 여부
  const selectMBTIOn = () =>
    setCheckAtr({
      check_interest: false,
      check_faculty: false,
      check_noMatter: false,
      check_mbti: true,
    })
  const selectMBTIOff = () => {
    setCheckAtr((prev) => {
      return {
        ...prev,
        check_mbti: true,
      }
    })
  }

  const checkedHandler = (checked: boolean, checked_id: string) => {
    if (checked) {
      setCheckAtr({
        check_mbti: false,
        check_interest: false,
        check_faculty: false,
        check_noMatter: false,
        [checked_id]: true,
      })
    } else {
      setCheckAtr({
        check_mbti: false,
        check_interest: false,
        check_faculty: false,
        check_noMatter: false,
        [checked_id]: false,
      })
    }
  }
  const handleMBTI = (mbtiProps: MBTI) => {
    setAtrMBTI(mbtiProps)
  }
  useEffect(() => {
    setIdx(6)
  }, [setIdx])
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
          <MBTIModal
            closeModal={closeModal}
            handleMBTI={handleMBTI}
            commonState={commonState}
            userMBTI={currentUserState.mbti}
            selectMBTIOn={selectMBTIOn}
            selectMBTIOff={selectMBTIOff}
          />
        </BasicModal>
      )}
      <div className="common__container">
        <div className="common__title">
          <div>우리방의 공통점을</div>
          <span>골라주세요</span>
        </div>
        <div className="common-input__container">
          <div className="common_input__op">
            <input
              type="radio"
              name="common"
              id="mbti"
              value="mbti"
              onChange={(e) =>
                checkedHandler(e.currentTarget.checked, "check_mbti")
              }
              checked={checkAtr.check_mbti ? true : false}
            ></input>
            <label htmlFor="mbti" onClick={openModal}>
              <div>MBTI</div>
            </label>
            <div className="label__checked">
              <span>나의 MBTI가 비슷한 메이트만</span>
              <span>들어올 수 있어요</span>
            </div>
          </div>
          <div className="common_input__op">
            <input
              type="radio"
              name="common"
              id="interest"
              value="interest"
              onChange={(e) =>
                checkedHandler(e.currentTarget.checked, "check_interest")
              }
              checked={checkAtr.check_interest ? true : false}
            ></input>
            <label
              htmlFor="interest"
              onClick={() => {
                setAtrInterest(currentUserState.interest_list)
              }}
            >
              <div>관심사</div>
            </label>
            <div className="label__checked">
              <span>나의 관심사가 비슷한 메이트만</span>
              <span>들어올 수 있어요</span>
            </div>
          </div>
          <div className="common_input__op">
            <input
              type="radio"
              name="common"
              id="faculty"
              value="faculty"
              onChange={(e) =>
                checkedHandler(e.currentTarget.checked, "check_faculty")
              }
              checked={checkAtr.check_faculty ? true : false}
            ></input>
            <label
              htmlFor="faculty"
              onClick={() => setAtrFaculty(currentUserState.faculty)}
            >
              <div>단과대</div>
            </label>
            <div className="label__checked">
              <span>나의 단과대가 같은 메이트만</span>
              <span>들어올 수 있어요</span>
            </div>
          </div>
          <div className="common_input__op">
            <input
              type="radio"
              name="common"
              id="no"
              value="no"
              onChange={(e) =>
                checkedHandler(e.currentTarget.checked, "check_noMatter")
              }
              checked={checkAtr.check_noMatter ? true : false}
            ></input>
            <label htmlFor="no" onClick={() => setAtrNoMatter(true)}>
              <div>없음</div>
            </label>
            <div className="label__checked">
              <span>누구나 들어올 수 있어요</span>
              <span> </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default CommonType
