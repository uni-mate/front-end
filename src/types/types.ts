import { RouterState } from "connected-react-router"
import { Reducer, AnyAction } from "redux"

export interface UserState {
  user_id: string
  userId: string
  email: string
  faculty: string
  department: string
  interest_list: string[]
  mbti: {
    first_mbti: string
    second_mbti: string
    third_mbti: string
    fourth_mbti: string
  }
}

export interface AuthState {
  user_data: UserState
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

export interface CreateRoomCommonState {
  mbti: {
    first_mbti: string
    second_mbti: string
    third_mbti: string
    fourth_mbti: string
  }
  interest: string[]
  faculty: string
  nomatter: boolean
}

export interface MBTI {
  first_mbti: string
  second_mbti: string
  third_mbti: string
  fourth_mbti: string
}

export interface createRoomData {
  chat_type: string
  purpose: string
  grade: string
  head_count: number
  gender: string
  chat_feature: CreateRoomCommonState
  title: string
  desc: string
}

export interface CreateRoomState {
  createRoom_data: createRoomData
  createRoom_loading: boolean
  createRoom_error: null | any
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
