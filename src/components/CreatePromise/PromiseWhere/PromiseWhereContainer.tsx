import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPromisePage, setPromiseWhere } from "../../../redux/modules/promise"
import { RootState } from "../../../types/types"
import PromiseWhere from "./PromiseWhere"

const PromiseWhereContainer = () => {
  const where = useSelector<RootState, string>(
    (state) => state.promise.createPromise_data.where_to_meet
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
      dispatch(setPromiseWhere(type))
    },
    [dispatch]
  )
  return <PromiseWhere setIdx={setIdx} setAtr={setAtr} where={where} />
}

export default PromiseWhereContainer
