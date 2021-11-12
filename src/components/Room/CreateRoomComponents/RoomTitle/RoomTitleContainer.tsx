import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTitle } from "../../../../redux/modules/createRoom"
import { RootState } from "../../../../types/types"
import RoomTitle from "./RoomTitle"

const RoomTitleContainer = () => {
  const titleState = useSelector<RootState, string>(
    (state) => state.createRoom.createRoom_data.title
  )
  const dispatch = useDispatch()
  const setAtr = useCallback(
    (type) => {
      dispatch(setTitle(type))
    },
    [dispatch]
  )
  return <RoomTitle titleState={titleState} setAtr={setAtr} />
}

export default RoomTitleContainer
