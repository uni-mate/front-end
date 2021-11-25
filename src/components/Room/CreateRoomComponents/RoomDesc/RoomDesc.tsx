import React, { Fragment, useEffect, useState } from "react"
import {
  CreateRoomData,
  CreateRoomState,
} from "../../../../types/CreateRoomTypes"
import CustomButton from "../../../Partials/CustomButton/CustomButton"

import _ from "lodash"

import "./RoomDesc.css"
import BasicModal from "../../../Partials/Modal/BasicModal"
import CreateRoomModal from "../../../Partials/Modal/CreateRoomModal/CreateRoomModal"

interface Props {
  userId: string
  blockHandler: () => void
  descState: string
  totalState: CreateRoomState
  setAtr: (type: string) => void
  setIdx: (idx: number) => void
  setNewRoom: (body: CreateRoomData) => void
  createLoading: boolean
}

const mbtiSt = {
  first_mbti: "",
  second_mbti: "",
  third_mbti: "",
  fourth_mbti: "",
}

const RoomDesc = ({
  userId,
  blockHandler,
  descState,
  totalState,
  setAtr,
  setIdx,
  setNewRoom,
  createLoading,
}: Props) => {
  const { chat_type, chat_purpose, grade, gender, title, desc, chat_feature } =
    totalState.createRoom_data
  const [submitValid, setSubmitValid] = useState(false)
  const [chatFeatureValid, setChatFeatureValid] = useState(false)
  const [purposValid, setPurposValid] = useState(false)
  useEffect(() => {
    chat_type === "appointment" && _.size(chat_purpose) === 0
      ? setPurposValid(false)
      : setPurposValid(true)
  }, [chat_type, chat_purpose])
  useEffect(() => {
    purposValid &&
    _.size(grade) > 0 &&
    _.size(gender) > 0 &&
    _.size(title) > 0 &&
    _.size(desc) > 0 &&
    chatFeatureValid
      ? setSubmitValid(true)
      : setSubmitValid(false)
  }, [purposValid, grade, gender, title, desc, chatFeatureValid, submitValid])
  useEffect(() => {
    _.size(chat_feature.faculty) === 0 &&
    chat_feature.nomatter === false &&
    _.size(chat_feature.interest) === 0 &&
    chat_feature.mbti === mbtiSt
      ? setChatFeatureValid(false)
      : setChatFeatureValid(true)
  }, [chat_feature])
  const [detDesc, setDetDesc] = useState(descState === "" ? "" : descState)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetDesc(e.target.value)
  }

  const handleCreateRoom = () => {
    setNewRoom(totalState.createRoom_data)
    blockHandler()
  }
  useEffect(() => {
    setIdx(8)
    setAtr(detDesc)
  }, [setIdx, setAtr, detDesc])
  return (
    <Fragment>
      <BasicModal
        isModalOpen={createLoading}
        width="0px"
        height="0px"
        backgroundColor="transparent"
        boxShadow={0}
        padding="0px"
      >
        <CreateRoomModal />
      </BasicModal>
      <div className="desc__container">
        <div className="desc__title">
          <div>메이트들에게</div>
          <div>자유롭게 한 마디!</div>
        </div>
        <div className="desc-input__container">
          <input
            type="input"
            name="desc"
            value={detDesc}
            onChange={handleChange}
            placeholder="ex) 방에 대한 간단한 설명"
          ></input>
        </div>
        <div className="desc__button">
          <CustomButton
            width="85%"
            onClick={handleCreateRoom}
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

export default RoomDesc
