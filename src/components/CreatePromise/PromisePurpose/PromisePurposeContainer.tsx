import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setPromisePage,
  setPromisePurpose,
} from "../../../redux/modules/promise"
import { RootState } from "../../../types/types"
import PromisePurpose from "./PromisePurpose"

const PromisePurposeContainer = () => {
  const prupose = useSelector<RootState, string>(
    (state) => state.promise.createPromise_data.promise_purpose
  )
  const dispatch = useDispatch()
  const setIdx = useCallback(
    (idx) => {
      dispatch(setPromisePage(idx))
    },
    [dispatch]
  )
  const setAtr = useCallback(
    (type) => {
      dispatch(setPromisePurpose(type))
    },
    [dispatch]
  )
  return <PromisePurpose setIdx={setIdx} setAtr={setAtr} prupose={prupose} />
}

export default PromisePurposeContainer
