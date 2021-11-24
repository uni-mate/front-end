import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPromisePage, setPromiseTitle } from "../../../redux/modules/promise"
import { RootState } from "../../../types/types"
import PromiseTitle from "./PromiseTitle"

const PromiseTitleContainer = () => {
  const title = useSelector<RootState, string>(
    (state) => state.promise.createPromise_data.promise_title
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
      dispatch(setPromiseTitle(type))
    },
    [dispatch]
  )
  return <PromiseTitle setIdx={setIdx} setAtr={setAtr} title={title} />
}

export default PromiseTitleContainer
