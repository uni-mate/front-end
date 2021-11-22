import React, { useCallback } from "react"
import Register2 from "./Register2"
import { useDispatch } from "react-redux"
import {
  setEmail,
  setNickName,
  setPassword,
  setUserId,
} from "./../../../redux/modules/signIn"

const Register2Container = () => {
  const dispatch = useDispatch()

  const userIdHandler = useCallback(
    (userId: string) => {
      dispatch(setUserId(userId))
    },
    [dispatch]
  )
  const userNickNameHandler = useCallback(
    (nickName: string) => {
      dispatch(setNickName(nickName))
    },
    [dispatch]
  )
  const emailHandler = useCallback(
    (email: string) => {
      dispatch(setEmail(email))
    },
    [dispatch]
  )
  const passwordHandler = useCallback(
    (password: string) => {
      dispatch(setPassword(password))
    },
    [dispatch]
  )
  return (
    <Register2
      userIdHandler={userIdHandler}
      userNickNameHandler={userNickNameHandler}
      emailHandler={emailHandler}
      passwordHandler={passwordHandler}
    />
  )
}

export default Register2Container
