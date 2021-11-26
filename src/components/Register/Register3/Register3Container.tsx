import React, { useCallback } from "react"
import Register3 from "./Register3"
import { useDispatch, useSelector } from "react-redux"
import { setMBTI } from "../../../redux/modules/signIn"
import { RootState } from "../../../types/types"
import { MBTI } from "../../../types/CreateRoomTypes"

const Register3Container = () => {
  const registerMBTI = useSelector<RootState, MBTI>(
    (state) => state.signIn.register_state.mbti
  )
  const dispatch = useDispatch()
  const setAtr = useCallback(
    (req) => {
      dispatch(setMBTI(req))
    },
    [dispatch]
  )
  return <Register3 setAtr={setAtr} registerMBTI={registerMBTI} />
}

export default Register3Container
