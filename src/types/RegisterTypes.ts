import { MBTI } from "./CreateRoomTypes"

export interface RegisterData {
  school: string
  department: string
  grade: string
  user_id: string
  user_nickname: string
  user_name: string
  email: string
  password: string
  mbti: MBTI
  birdh_of_date: string
  interest: string[]
  introducing: string
  gender: string
}

export interface RegisterState {
  register_state: RegisterData
  register_loading: boolean
  register_error: any
}
