import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../types/types"
import { CreateRoomState } from "./../../../types/CreateRoomTypes"
import CreateRoomDetailPage from "./CreateRoomDetailPage"

const CreateRoomDetailPageContainer = () => {
  const createState = useSelector<RootState, CreateRoomState>(
    (state) => state.createRoom
  )
  const page = useSelector<RootState, number>(
    (state) => state.createRoom.create_page
  )
  return <CreateRoomDetailPage createState={createState} page={page} />
}

export default CreateRoomDetailPageContainer
