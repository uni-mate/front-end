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
  meet_status: string
  chat_in_out_status: string
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
  router: Reducer<RouterState<unknown>, AnyAction>
}
