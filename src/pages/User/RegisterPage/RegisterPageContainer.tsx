import React, { useCallback } from "react"
import { useDispatch } from "react-redux"
import { register } from "../../../redux/modules/signIn"
import RegisterPage from "./RegisterPage"

const RegisterPageContainer = () => {
  const dispatch = useDispatch()
  const registerSaga = useCallback(
    (req) => {
      dispatch(register(req))
    },
    [dispatch]
  )
  return <RegisterPage registerSaga={registerSaga} />
}

export default RegisterPageContainer
