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

export interface ChatState {
  chat_data?: Chat[]
  chat_loading: boolean
  chat_error: null | any
}

export interface MyChatState {
  myChat_data: []
  myChat_loading: boolean
  myChat_error: null | any
}
