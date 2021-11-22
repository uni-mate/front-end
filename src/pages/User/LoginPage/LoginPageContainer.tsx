import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../../redux/modules/auth"
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
  return <LoginPage loginSaga={loginSaga} error={error} />
}

export default LoginPageContainer
