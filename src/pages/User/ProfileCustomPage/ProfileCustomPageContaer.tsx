import React from "react"
import { useSelector } from "react-redux"
import ProfileCustomPage from "./ProfileCustomPage"
import { RootState } from "./../../../types/types"

const ProfileCustomPageContaer = () => {
  const username = useSelector<RootState, string>(
    (state) => state.auth.user_data.username
  )

  return <ProfileCustomPage username={username} />
}

export default ProfileCustomPageContaer
