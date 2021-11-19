import React, { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  setFaculty,
  setInterest,
  setMBTI,
  setNomatter,
  setPage,
} from "../../../../redux/modules/createRoom"
import { CreateRoomCommonState } from "../../../../types/CreateRoomTypes"
import { RootState } from "./../../../../types/types"
import { UserState } from "./../../../../types/UserTypes"

import CommonType from "./CommonType"

const CommonTypeContainer = () => {
  const commonState = useSelector<RootState, CreateRoomCommonState>(
    (state) => state.createRoom.createRoom_data?.chat_feature
  )
  const currentUserState = useSelector<RootState, UserState>(
    (state) => state.auth.user_data
  )
  const dispatch = useDispatch()
  const setIdx = useCallback(
    (idx) => {
      dispatch(setPage(idx))
    },
    [dispatch]
  )
  const setAtrMBTI = useCallback(
    (mbti) => {
      dispatch(setMBTI(mbti))
    },
    [dispatch]
  )
  const setAtrInterest = useCallback(
    (interest) => {
      dispatch(setInterest(interest))
    },
    [dispatch]
  )
  const setAtrFaculty = useCallback(
    (faculty) => {
      dispatch(setFaculty(faculty))
    },
    [dispatch]
  )
  const setAtrNoMatter = useCallback(
    (det) => {
      dispatch(setNomatter(det))
    },
    [dispatch]
  )
  return (
    <CommonType
      commonState={commonState}
      currentUserState={currentUserState}
      setAtrMBTI={setAtrMBTI}
      setAtrInterest={setAtrInterest}
      setAtrFaculty={setAtrFaculty}
      setAtrNoMatter={setAtrNoMatter}
      setIdx={setIdx}
    />
  )
}

export default CommonTypeContainer
