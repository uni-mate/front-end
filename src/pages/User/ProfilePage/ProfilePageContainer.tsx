import React from "react"
import { useSelector } from "react-redux"
import { RootState, UserState } from "../../../types/types"
import ProfilePage from "./ProfilePage"

const ProfilePageContainer = () => {
  const currentUser = useSelector<RootState, UserState>(
    (state) => state.auth.user_data
  )
  return <ProfilePage currentUser={currentUser} />
}

export default ProfilePageContainer
