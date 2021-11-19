import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  createRoom,
  setDesc,
  setPage,
} from "../../../../redux/modules/createRoom"
import { RootState } from "../../../../types/types"
import { CreateRoomState } from "./../../../../types/CreateRoomTypes"

import RoomDesc from "./RoomDesc"

interface Props {
  blockHandler: () => void
}

const RoomDescContainer = ({ blockHandler }: Props) => {
  const descState = useSelector<RootState, string>(
    (state) => state.createRoom.createRoom_data.desc
  )
  const totalState = useSelector<RootState, CreateRoomState>(
    (state) => state.createRoom
  )
  const dispatch = useDispatch()
  const setIdx = useCallback(
    (idx) => {
      dispatch(setPage(idx))
    },
    [dispatch]
  )
  const setAtr = useCallback(
    (type) => {
      dispatch(setDesc(type))
    },
    [dispatch]
  )
  const setNewRoom = useCallback(
    (body) => {
      dispatch(createRoom(body))
    },
    [dispatch]
  )
  return (
    <RoomDesc
      blockHandler={blockHandler}
      descState={descState}
      totalState={totalState}
      setAtr={setAtr}
      setIdx={setIdx}
      setNewRoom={setNewRoom}
    />
  )
}

export default RoomDescContainer
