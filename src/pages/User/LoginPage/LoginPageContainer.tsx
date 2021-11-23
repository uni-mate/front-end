import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, login2, login3 } from "../../../redux/modules/auth"
import LoginPage from "./LoginPage"
import { RootState } from "./../../../types/types"

const LoginPageContainer = () => {
  const dispatch = useDispatch()
  const error = useSelector<RootState, any>((state) => state.auth.error)
  const loginSaga = useCallback(
    (req) => {
      dispatch(login(req))
    },
    [dispatch]
  )
  const loginSaga2 = useCallback(
    (req) => {
      dispatch(login2(req))
    },
    [dispatch]
  )
  const loginSaga3 = useCallback(
    (req) => {
      dispatch(login3(req))
    },
    [dispatch]
  )
  return (
    <LoginPage
      loginSaga={loginSaga}
      loginSaga2={loginSaga2}
      loginSaga3={loginSaga3}
      error={error}
    />
  )
}

export default LoginPageContainer
