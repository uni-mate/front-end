import { CreateRoomCommonState } from "./CreateRoomTypes"

export interface ChatState {
  chat_data?: ChatType[]
  chat_loading: boolean
  chat_error: null | any
}

export interface TestUserState {
  name: string
  image?: string
}

export interface ChatType {
  chat_id: string
  chat_type: string
  title: string
  description: string
  chat_purpose: string
  meet_status: boolean
  max_head_count: number
  head_count: number
  grade: string[]
  select_gender: string
  user_list: TestUserState[]
  chat_feature: CreateRoomCommonState
}

export interface MyChatState {
  myChat_data: ChatType[]
  myChat_loading: boolean
  myChat_error: null | any
}
