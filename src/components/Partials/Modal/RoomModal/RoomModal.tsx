import React, { useEffect, useState } from "react"
import { ChatType } from "../../../../types/ChatTypes"

import _ from "lodash"

import "./RoomModal.css"

interface Props {
  chat: ChatType
  closeModal: () => void
  isMyRoom?: boolean
}

const RoomModal = (props: Props) => {
  const {
    title,
    description,
    chat_type,
    chat_purpose,
    grade,
    select_gender,
    chat_feature,
  } = props.chat
  const { closeModal, isMyRoom } = props
  const [MBTIValid, setMBTIValid] = useState(false)
  const [interestValid, setInterestValid] = useState(false)
  const [noMatterValid, setNoMatterValid] = useState(false)
  const [facultyValid, setFacultyValid] = useState(false)
  const { first_mbti, second_mbti, third_mbti, fourth_mbti } = chat_feature.mbti

  useEffect(() => {
    if (chat_feature.nomatter === true) {
      setNoMatterValid(true)
      setMBTIValid(false)
      setInterestValid(false)
      setFacultyValid(false)
    } else if (_.size(chat_feature.interest) > 0) {
      setNoMatterValid(false)
      setMBTIValid(false)
      setInterestValid(true)
      setFacultyValid(false)
    } else if (_.size(chat_feature.faculty) > 0) {
      setNoMatterValid(false)
      setMBTIValid(false)
      setInterestValid(false)
      setFacultyValid(true)
    } else {
      setNoMatterValid(false)
      setMBTIValid(true)
      setInterestValid(false)
      setFacultyValid(false)
    }
  }, [chat_feature])
  return (
    <div className="allroom-modal">
      <div className="allroom-modal__title">
        <span>{title}</span>
      </div>
      <div className="allroom-modal__body">
        <div className="allroom-modal__body--desc">
          <span>방 설명</span>
          <div>{description}</div>
        </div>
        <div className="allroom-modal__body--desc">
          <span>방 성격</span>
          <div>{chat_type === "promise" ? "약속방" : "채팅방"}</div>
        </div>
        <div className="allroom-modal__body--desc">
          <span>약속 목적</span>
          {_.size(chat_purpose) !== 0 ? (
            <div>{chat_purpose}</div>
          ) : (
            <div className="empty">미결정</div>
          )}
        </div>
        <div className="allroom-modal__body--desc">
          <span>학년</span>
          {grade.map((g) => (
            <div>{g}학년</div>
          ))}
        </div>
        <div className="allroom-modal__body--desc">
          <span>성별</span>
          <div>{select_gender === "men" ? "남자" : "여자"}</div>
        </div>
        <div className="allroom-modal__body--desc">
          <span>공통점</span>
          {MBTIValid && <div>MBTI</div>}
          {interestValid && <div>단과대</div>}
          {noMatterValid && <div>없음</div>}
          {facultyValid && <div>관심사</div>}
        </div>
        <div className="allroom-modal__body--desc last">
          <span>공통점 상세</span>
          {MBTIValid && (
            <div>{`${first_mbti}${second_mbti}${third_mbti}${fourth_mbti}`}</div>
          )}

          {facultyValid && <div>{chat_feature.faculty}</div>}
          {noMatterValid && <div>없음</div>}
          {interestValid && (
            <div className="last--desc">
              {chat_feature.interest.map((atr) => (
                <div>{atr}</div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={`allroom-modal__button ${isMyRoom ? "myroom" : ""}`}>
        <button onClick={closeModal}>설명창 닫기</button>
        {!isMyRoom && (
          <button onClick={() => alert("인원이 가득 찼습니다!")}>
            이 방에 참여할게요!
          </button>
        )}
      </div>
    </div>
  )
}

export default RoomModal
