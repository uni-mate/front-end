import { RouterState } from "connected-react-router"
import { Reducer, AnyAction } from "redux"

export interface AuthState {
  user_data: []
  loading: boolean
  error: null | any
}

export interface NavBarState {
  isNavbar: boolean
}

export interface Chat {
  chat_id: string
  chat_type: string
  title: string
  head_count: number
  select_gender: string
  chat_purpose: string
  description: string
  meet_status: boolean
  chat_in_out_status: string
}

export interface CreateRoomState {
  chat_type: string
  purpose: string
  grade: string
  head_count: number
  gender: string
  chat_feature: {
    mbti: [
      { first_mbti: string },
      { second_mbti: string },
      { third_mbti: string },
      { fourth_mbti: string }
    ]
    interest: {}
    department: string
  }
  title: string
  desc: string
}

export interface ChatState {
  chat_data?: Chat[]
  chat_loading: boolean
  chat_error: null | any
}

export interface RootState {
  auth: AuthState
  navbar: NavBarState
  chat: ChatState
  createRoom: CreateRoomState
  router: Reducer<RouterState<unknown>, AnyAction>
}
