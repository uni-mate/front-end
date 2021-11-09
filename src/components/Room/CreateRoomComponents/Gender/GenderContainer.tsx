import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setGender } from "../../../../redux/modules/createRoom"
import { RootState } from "../../../../types/types"
import Gender from "./Gender"

const GenderContainer = () => {
  const genderState = useSelector<RootState, string>(
    (state) => state.createRoom.gender
  )
  const dispatch = useDispatch()
  const setAtr = useCallback(
    (type) => {
      dispatch(setGender(type))
    },
    [dispatch]
  )

  return <Gender setAtr={setAtr} genderState={genderState} />
}

export default GenderContainer
