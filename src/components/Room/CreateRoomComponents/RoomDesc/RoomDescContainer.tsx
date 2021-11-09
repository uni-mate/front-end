import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setDesc } from "../../../../redux/modules/createRoom"
import { RootState } from "../../../../types/types"
import RoomDesc from "./RoomDesc"

const RoomDescContainer = () => {
  const descState = useSelector<RootState, string>(
    (state) => state.createRoom.desc
  )
  const dispatch = useDispatch()
  const setAtr = useCallback(
    (type) => {
      dispatch(setDesc(type))
    },
    [dispatch]
  )
  return <RoomDesc descState={descState} setAtr={setAtr} />
}

export default RoomDescContainer
