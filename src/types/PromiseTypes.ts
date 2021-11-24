export interface PromiseType {
  promise_purpose: string
  where_to_meet: string
  when_to_meet: string
  promise_title: string
  promise_desc: string
}

export interface PromiseState {
  createPromise_data: PromiseType
  createPromise_loading: boolean
  createPromise_error: any
  createPromise_page: number
  createPromise_success: boolean
}

export interface PromiseModalType {
  isPromiseModalOpen: boolean
}
