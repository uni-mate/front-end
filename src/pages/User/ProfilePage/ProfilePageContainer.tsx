import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../../redux/modules/auth"
import { RootState, UserState } from "../../../types/types"
import ProfilePage from "./ProfilePage"

const ProfilePageContainer = () => {
  const currentUser = useSelector<RootState, UserState>(
    (state) => state.auth.user_data
  )
  const dispatch = useDispatch()
  const logouthandler = useCallback(() => {
    dispatch(logout())
  }, [dispatch])
  return <ProfilePage currentUser={currentUser} logouthandler={logouthandler} />
}

export default ProfilePageContainer
