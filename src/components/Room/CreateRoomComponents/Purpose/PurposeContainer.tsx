import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPage, setPurpose } from "../../../../redux/modules/createRoom"
import { RootState } from "../../../../types/types"
import Purpose from "./Purpose"

const PurposeContainer = () => {
  const purposeState = useSelector<RootState, string>(
    (state) => state.createRoom.createRoom_data.purpose
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
      dispatch(setPurpose(type))
    },
    [dispatch]
  )
  return <Purpose purposeState={purposeState} setAtr={setAtr} setIdx={setIdx} />
}

export default PurposeContainer
