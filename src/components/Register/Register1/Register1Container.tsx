import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setFaculty,
  setGrade,
  setUserSchool,
} from "../../../redux/modules/signIn"
import { RootState } from "../../../types/types"
import Register1 from "./Register1"

const Register1Container = () => {
  const faculty = useSelector<RootState, string>(
    (state) => state.signIn.register_state.department
  )
  const school = useSelector<RootState, string>(
    (state) => state.signIn.register_state.school
  )
  const dispatch = useDispatch()
  const setAtr1 = useCallback(
    (req) => {
      dispatch(setUserSchool(req))
    },
    [dispatch]
  )
  const setAtr2 = useCallback(
    (req) => {
      dispatch(setFaculty(req))
    },
    [dispatch]
  )
  const setAtr3 = useCallback(
    (req) => {
      dispatch(setGrade(req))
    },
    [dispatch]
  )
  return (
    <Register1
      setAtr1={setAtr1}
      setAtr2={setAtr2}
      setAtr3={setAtr3}
      faculty={faculty}
      school={school}
    />
  )
}

export default Register1Container
