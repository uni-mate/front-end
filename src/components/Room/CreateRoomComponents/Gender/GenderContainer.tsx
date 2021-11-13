import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setGender, setPage } from "../../../../redux/modules/createRoom"
import { RootState } from "../../../../types/types"
import Gender from "./Gender"

const GenderContainer = () => {
  const genderState = useSelector<RootState, string>(
    (state) => state.createRoom.createRoom_data.gender
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
      dispatch(setGender(type))
    },
    [dispatch]
  )

  return <Gender setAtr={setAtr} genderState={genderState} setIdx={setIdx} />
}

export default GenderContainer
