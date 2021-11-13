import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPage, setTitle } from "../../../../redux/modules/createRoom"
import { RootState } from "../../../../types/types"
import RoomTitle from "./RoomTitle"

const RoomTitleContainer = () => {
  const titleState = useSelector<RootState, string>(
    (state) => state.createRoom.createRoom_data.title
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
      dispatch(setTitle(type))
    },
    [dispatch]
  )
  return <RoomTitle titleState={titleState} setAtr={setAtr} setIdx={setIdx} />
}

export default RoomTitleContainer
