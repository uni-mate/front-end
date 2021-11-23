import { takeEvery, getContext, put } from "@redux-saga/core/effects"
import { createAction, handleActions } from "redux-actions"
import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

const prefix = "front/signIn"
const PENDING = `${prefix}/PENDING`
const SUCCESS = `${prefix}/SUCCESS`
const FAIL = `${prefix}/FAIL`

const SET_USERID = `${prefix}/SET_USERID`
const SET_NICKNAME = `${prefix}/SET_NICKNAME`
const SET_EMAIL = `${prefix}/SET_EMAIL`
const SET_PASSWORD = `${prefix}/SET_PASSWORD`

const pending = createAction(PENDING)
const fail = createAction(FAIL, (err) => err)
const success = createAction(SUCCESS)

export const setUserId = createAction(SET_USERID)
export const setNickName = createAction(SET_NICKNAME)
export const setEmail = createAction(SET_EMAIL)
export const setPassword = createAction(SET_PASSWORD)

const initialState = {
  register_state: {
    school: "",
    department: "",
    grade: null,
    user_id: "",
    user_nickname: "",
    user_name: "",
    email: "",
    password: "",
    mbti: {
      first_mbti: "",
      second_mbti: "",
      third_mbti: "",
      fourth_mbti: "",
    },
    birdh_of_date: "",
    interest: [],
    introducing: "",
  },
  register_loading: false,
  register_error: null,
}

const reducer = handleActions(
  {
    [PENDING]: (state) => ({
      ...state,
      register_loading: true,
      register_error: null,
    }),
    [SUCCESS]: (state) => ({
      ...state,
      register_loading: false,
      register_error: null,
    }),
    [FAIL]: (state, action) => ({
      ...state,
      register_loading: false,
      register_error: action.paylaod,
    }),
    [SET_USERID]: (state, action) => ({
      ...state,
      register_state: { ...state.register_state, user_id: action.payload },
    }),
    [SET_NICKNAME]: (state, action) => ({
      ...state,
      register_state: {
        ...state.register_state,
        user_nickname: action.payload,
      },
    }),
    [SET_EMAIL]: (state, action) => ({
      ...state,
      register_state: { ...state.register_state, email: action.payload },
    }),
    [SET_PASSWORD]: (state, action) => ({
      ...state,
      register_state: { ...state.register_state, password: action.payload },
    }),
  },
  initialState
)

export default reducer

// Saga

const REGISTER = `${prefix}/REGISTER`

export const register = createAction(REGISTER, (registerInfo) => registerInfo)

function* registerSaga(action) {
  try {
    const history = yield getContext("history")
    yield put(pending())
    const res = yield axios.post(`${API_URL}/api/auth/register`, action.payload)
    console.log(res)
    yield put(success())
    yield history.push("/auth/login")
  } catch (error) {
    yield put(fail(error))
  }
}

export function* signInSaga() {
  yield takeEvery(REGISTER, registerSaga)
}
