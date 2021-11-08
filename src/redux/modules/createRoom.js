import { createAction, handleActions } from "redux-actions"

const prefix = "front/createRoom"

const SET_CAHT_TYPE = `${prefix}/SET_CAHT_TYPE`
// const GRADE = `${prefix}/GRADE`
// const HEAD_COUNT = `${prefix}/HADE_COUNT`

export const setChatType = createAction(SET_CAHT_TYPE, (chat_type) => chat_type)

const initialState = {
  chat_type: "appointment",
}

const reducer = handleActions(
  {
    [SET_CAHT_TYPE]: (state, action) => ({
      ...state,
      chat_type: action.payload,
    }),
  },
  initialState
)

export default reducer
