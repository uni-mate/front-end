export interface MBTI {
  first_mbti: string
  second_mbti: string
  third_mbti: string
  fourth_mbti: string
}

export interface CreateRoomCommonState {
  mbti: MBTI
  interest: string[]
  faculty: string
  nomatter: boolean
}

export interface CreateRoomData {
  chat_type: string
  chat_purpose: string
  grade: string[]
  head_count: number
  gender: string
  chat_feature: CreateRoomCommonState
  title: string
  desc: string
}

export interface CreateRoomState {
  createRoom_data: CreateRoomData
  createRoom_loading: boolean
  createRoom_error: null | any
  create_page: number
}
