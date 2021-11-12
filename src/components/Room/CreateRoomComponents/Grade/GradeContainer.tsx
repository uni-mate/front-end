import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setGrade } from "../../../../redux/modules/createRoom"
import { RootState } from "../../../../types/types"
import Grade from "./Grade"

const GradeContainer = () => {
  const gradeState = useSelector<RootState, string>(
    (state) => state.createRoom.createRoom_data.grade
  )
  const dispatch = useDispatch()
  const setAtr = useCallback(
    (type) => {
      dispatch(setGrade(type))
    },
    [dispatch]
  )
  return <Grade gradeState={gradeState} setAtr={setAtr} />
}

export default GradeContainer
