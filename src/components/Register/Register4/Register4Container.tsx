import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setInterest } from "../../../redux/modules/signIn"
import { RootState } from "../../../types/types"
import { Register4 } from "./Register4"

const Register4Container = () => {
  const registerInterest = useSelector<RootState, string[]>(
    (state) => state.signIn.register_state.interest
  )
  const dispatch = useDispatch()
  const setAtr = useCallback(
    (req) => {
      dispatch(setInterest(req))
    },
    [dispatch]
  )
  return <Register4 registerInterest={registerInterest} setAtr={setAtr} />
}

export default Register4Container
