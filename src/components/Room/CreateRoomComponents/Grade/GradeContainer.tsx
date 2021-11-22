import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setGrade, setPage } from "../../../../redux/modules/createRoom"
import { RootState } from "../../../../types/types"
import Grade from "./Grade"

const GradeContainer = () => {
  const gradeState = useSelector<RootState, string[]>(
    (state) => state.createRoom.createRoom_data.grade
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
      dispatch(setGrade(type))
    },
    [dispatch]
  )
  return <Grade gradeState={gradeState} setAtr={setAtr} setIdx={setIdx} />
}

export default GradeContainer
