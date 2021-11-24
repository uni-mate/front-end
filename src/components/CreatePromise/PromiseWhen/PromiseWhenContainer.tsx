import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPromisePage, setPromiseWhen } from "../../../redux/modules/promise"
import { RootState } from "../../../types/types"
import PromiseWhen from "./PromiseWhen"

const PromiseWhenContainer = () => {
  const date = useSelector<RootState, string>(
    (state) => state.promise.createPromise_data.when_to_meet
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
      dispatch(setPromiseWhen(type))
    },
    [dispatch]
  )
  return <PromiseWhen setIdx={setIdx} setAtr={setAtr} date={date} />
}

export default PromiseWhenContainer
