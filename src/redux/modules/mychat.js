import { delay, put, takeEvery } from "@redux-saga/core/effects"
import { createAction, handleActions } from "redux-actions"
import axios from "axios"

const API_URL = "https://63f16ec6-55a8-43d0-829b-53e727e16944.mock.pstmn.io"

const prefix = "front/mychat"
const FETCH_MYCHAT_PENDING = `${prefix}/FETCH_MYCHAT_PENDING`
const FETCH_MYCHAT_FAIL = `${prefix}/FETCH_MYCHAT_FAIL`
const FETCH_MYCHAT_SUCCESS = `${prefix}/FETCH_MYCHAT_SUCCESS`

const fetchMyChatPending = createAction(FETCH_MYCHAT_PENDING)
const fetchMyChatFail = createAction(FETCH_MYCHAT_FAIL, (err) => err)
const fetchMyChatSuccess = createAction(FETCH_MYCHAT_SUCCESS, (data) => data)

const initialState = {
  myChat_data: [],
  myChat_loading: false,
  myChat_error: null,
}

const reducer = handleActions(
  {
    [FETCH_MYCHAT_PENDING]: (state) => ({
      ...state,
      myChat_loading: true,
    }),
    [FETCH_MYCHAT_FAIL]: (state, action) => ({
      ...state,
      myChat_loading: false,
      myChat_error: action.payload,
    }),
    [FETCH_MYCHAT_SUCCESS]: (state, action) => ({
      ...state,
      myChat_loading: false,
      myChat_data: action.payload,
    }),
  },
  initialState
)

export default reducer

//Saga

const FETCH_MYCHAT = `${prefix}/FETCH_MYCHAT`

export const fetchMyChat = createAction(FETCH_MYCHAT)

function* fetchMyChatSaga() {
  try {
    yield put(fetchMyChatPending())
    const res = yield axios.get(`${API_URL}/api/chat/mychat`)
    yield put(fetchMyChatSuccess(res.data.data))
  } catch (error) {
    yield put(fetchMyChatFail(error))
  }
}

export function* myChatSaga() {
  yield takeEvery(FETCH_MYCHAT, fetchMyChatSaga)
}
