import React, { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RegisterData } from "../../../types/RegisterTypes"
import { RootState } from "../../../types/types"
import Register5 from "./Register5"
import {
  setGender,
  setIntroducing,
  setUserBirth,
  setUserName,
  register,
} from "./../../../redux/modules/signIn"

const Register5Container = () => {
  const registerInfo = useSelector<RootState, RegisterData>(
    (state) => state.signIn.register_state
  )
  const dispatch = useDispatch()
  const setAtr1 = useCallback(
    (req) => {
      dispatch(setUserName(req))
    },
    [dispatch]
  )
  const setAtr2 = useCallback(
    (req) => {
      dispatch(setUserBirth(req))
    },
    [dispatch]
  )
  const setAtr3 = useCallback(
    (req) => {
      dispatch(setIntroducing(req))
    },
    [dispatch]
  )
  const setAtr4 = useCallback(
    (req) => {
      dispatch(setGender(req))
    },
    [dispatch]
  )
  const registerHandler = useCallback(() => {
    dispatch(register())
  }, [dispatch])
  return (
    <Register5
      registerHandler={registerHandler}
      registerInfo={registerInfo}
      setAtr1={setAtr1}
      setAtr2={setAtr2}
      setAtr3={setAtr3}
      setAtr4={setAtr4}
    />
  )
}

export default Register5Container
