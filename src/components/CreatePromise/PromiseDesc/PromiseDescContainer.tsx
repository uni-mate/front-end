import React, { useCallback } from "react"
import PromiseDesc from "./PromiseDesc"
import { useDispatch, useSelector } from "react-redux"
import {
  createPromise,
  setPromiseDesc,
  setPromisePage,
} from "./../../../redux/modules/promise"
import { RootState } from "../../../types/types"
import { PromiseType } from "../../../types/PromiseTypes"
import { closeModal } from "../../../redux/modules/promiseModal"

interface Props {
  blockHandler: () => void
}

const PromiseDescContainer = ({ blockHandler }: Props) => {
  const promiseInfo = useSelector<RootState, PromiseType>(
    (state) => state.promise.createPromise_data
  )
  const desc = useSelector<RootState, string>(
    (state) => state.promise.createPromise_data.promise_desc
  )
  const loading = useSelector<RootState, boolean>(
    (state) => state.promise.createPromise_loading
  )
  const promiseModalState = useSelector<RootState, boolean>(
    (state) => state.promiseModal.isPromiseModalOpen
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
      dispatch(setPromiseDesc(type))
    },
    [dispatch]
  )
  const setPromise = useCallback(() => {
    dispatch(createPromise())
  }, [dispatch])
  const closePromiseModal = useCallback(() => {
    dispatch(closeModal())
  }, [dispatch])
  return (
    <PromiseDesc
      blockHandler={blockHandler}
      setIdx={setIdx}
      setAtr={setAtr}
      desc={desc}
      promiseInfo={promiseInfo}
      setPromise={setPromise}
      loading={loading}
      closePromiseModal={closePromiseModal}
      promiseModalState={promiseModalState}
    />
  )
}

export default PromiseDescContainer
