import { createAction, handleActions } from "redux-actions"

const prefix = "front/filter"

const PENDING_FILTER = `${prefix}/PENDING_FILTER`
const SUCCESS_FILTER = `${prefix}/SUCCESS_FILTER`
const FAIL_FILTER = `${prefix}/FAIL_FILTER`
const FILTER_ING = `${prefix}/FILTER_ING`
const FILTER_FINISH = `${prefix}/FILTER_FINISH`

export const pendingFilter = createAction(PENDING_FILTER)
export const successFilter = createAction(SUCCESS_FILTER, (body) => body)
export const failFilter = createAction(FAIL_FILTER, (err) => err)
export const filterIng = createAction(FILTER_ING)
export const filterFinish = createAction(FILTER_FINISH)

const initialState = {
  filter_data: {
    chat_type: "",
    grade: [],
    gender: "",
    chat_feature: [],
    purpose: [],
  },
  filter_loading: false,
  filter_error: null,
  isfilter: false,
}

const reducer = handleActions(
  {
    [PENDING_FILTER]: (state) => ({
      ...state,
      filter_loading: true,
      filter_error: null,
    }),
    [SUCCESS_FILTER]: (state, action) => ({
      ...state,
      filter_data: action.payload,
      filter_loading: false,
      filter_error: null,
    }),
    [FAIL_FILTER]: (state, action) => ({
      ...state,
      filter_loading: false,
      filter_error: action.payload,
    }),
    [FILTER_ING]: (state) => ({
      ...state,
      filter_loading: false,
      filter_error: null,
      isfilter: true,
    }),
    [FILTER_FINISH]: (state) => ({
      ...state,
      filter_loading: false,
      filter_error: null,
      isfilter: false,
    }),
  },
  initialState
)

export default reducer
