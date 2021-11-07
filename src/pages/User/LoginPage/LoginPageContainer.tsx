import React, { useCallback } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../../redux/modules/auth"
import LoginPage from "./LoginPage"

const LoginPageContainer = () => {
  const dispatch = useDispatch()
  const loginSaga = useCallback(
    (req) => {
      dispatch(login(req))
    },
    [dispatch]
  )
  return <LoginPage loginSaga={loginSaga} />
}

export default LoginPageContainer
