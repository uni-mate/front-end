import { delay, put, takeEvery } from "@redux-saga/core/effects"
import { createAction, handleActions } from "redux-actions"
import axios from "axios"

const API_URL = "https://63f16ec6-55a8-43d0-829b-53e727e16944.mock.pstmn.io"

const prefix = "front/chat"
const FETCH_CHAT_PENDING = `${prefix}/FETCH_CHAT_PENDING`
const FETCH_CHAT_FAIL = `${prefix}/FETCH_CHAT_FAIL`
const FETCH_CHAT_SUCCESS = `${prefix}/FETCH_CHAT_SUCCESS`

const fetchChatPending = createAction(FETCH_CHAT_PENDING)
const fetchChatFail = createAction(FETCH_CHAT_FAIL, (err) => err)
const fetchChatSuccess = createAction(FETCH_CHAT_SUCCESS, (data) => data)

const initialState = {
  chat_data: [],
  chat_loading: false,
  chat_error: null,
}

const reducer = handleActions(
  {
    [FETCH_CHAT_PENDING]: (state) => ({
      ...state,
      chat_loading: true,
    }),
    [FETCH_CHAT_FAIL]: (state, action) => ({
      ...state,
      chat_loading: false,
      chat_error: action.payload,
    }),
    [FETCH_CHAT_SUCCESS]: (state, action) => ({
      ...state,
      chat_loading: false,
      chat_data: action.payload,
    }),
  },
  initialState
)

export default reducer

//Saga

const FETCH_ALL_CHAT = `${prefix}/FETCH_ALL_CHAT`

export const fetchAllChat = createAction(FETCH_ALL_CHAT)

function* fetchAllChatSaga() {
  try {
    yield put(fetchChatPending())
    yield delay(3000)
    const res = yield axios.get(`${API_URL}/api/chat/all`)
    yield put(fetchChatSuccess(res.data.data))
  } catch (error) {
    yield put(fetchChatFail(error))
  }
}

export function* chatSaga() {
  yield takeEvery(FETCH_ALL_CHAT, fetchAllChatSaga)
}
