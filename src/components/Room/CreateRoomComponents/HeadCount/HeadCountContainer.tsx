import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setHeadCount, setPage } from "../../../../redux/modules/createRoom"
import { RootState } from "../../../../types/types"
import HeadCount from "./HeadCount"

const HeadCountContainer = () => {
  const headCountState = useSelector<RootState, number>(
    (state) => state.createRoom.createRoom_data.head_count
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
      dispatch(setHeadCount(type))
    },
    [dispatch]
  )
  return (
    <HeadCount
      headCountState={headCountState}
      setAtr={setAtr}
      setIdx={setIdx}
    />
  )
}

export default HeadCountContainer
