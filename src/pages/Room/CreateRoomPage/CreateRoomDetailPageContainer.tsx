import React from "react"
import { useSelector } from "react-redux"
import { CreateRoomState, RootState } from "../../../types/types"
import CreateRoomDetailPage from "./CreateRoomDetailPage"

const CreateRoomDetailPageContainer = () => {
  const createState = useSelector<RootState, CreateRoomState>(
    (state) => state.createRoom
  )
  return <CreateRoomDetailPage createState={createState} />
}

export default CreateRoomDetailPageContainer
