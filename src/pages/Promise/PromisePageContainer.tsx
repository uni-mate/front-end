import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../../redux/modules/promiseModal"
import { RootState } from "../../types/types"
import PromisePage from "./PromisePage"

const PromisePageContainer = ({}) => {
  const dispatch = useDispatch()
  const page = useSelector<RootState, number>(
    (state) => state.promise.createPromise_page
  )
  const promiseModalClose = useCallback(() => {
    dispatch(closeModal())
  }, [dispatch])
  return <PromisePage page={page} promiseModalClose={promiseModalClose} />
}

export default PromisePageContainer
