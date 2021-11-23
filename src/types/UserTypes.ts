export interface UserState {
  user_id: string
  nickname: string
  username: string
  email: string
  faculty: string
  department: string
  interest_list: string[]
  grade: string
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
