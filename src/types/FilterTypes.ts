export interface FilterData {
  chat_type: string
  grade: string[]
  gender: string
  chat_feature: string
  purpose: string[]
}

export interface FilterState {
  filter_data: FilterData
  filter_loading: boolean
  filter_error: any
  isfilter: boolean
}
