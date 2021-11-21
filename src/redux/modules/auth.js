import { takeEvery, getContext, put } from "@redux-saga/core/effects"
import { createAction, handleActions } from "redux-actions"
import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

const prefix = "front/auth"
const PENDING = `${prefix}/PENDING`
const SUCCESS = `${prefix}/SUCCESS`
const FAIL = `${prefix}/FAIL`
const LOGIN_SUCCESS = `${prefix}/LOGIN_SUCCESS`
const LOGOUT_SUCCESS = `${prefix}/LOGOUT_SUCCESS`

const pending = createAction(PENDING)
const fail = createAction(FAIL, (err) => err)
const success = createAction(SUCCESS)
const loginSuccess = createAction(LOGIN_SUCCESS, (loginInfo) => loginInfo)
const logoutSuccess = createAction(LOGOUT_SUCCESS)

const initialState = {
  user_data: {},
  auth_loading: false,
  auth_error: null,
}

const reducer = handleActions(
  {
    [PENDING]: (state) => ({
      ...state,
      auth_loading: true,
      auth_error: null,
    }),
    [SUCCESS]: (state) => ({
      ...state,
      auth_loading: false,
      auth_error: null,
    }),
    [FAIL]: (state, action) => ({
      ...state,
      auth_loading: false,
      auth_error: action.paylaod,
    }),
    [LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      user_data: { ...state.user_data, ...action.payload },
      auth_loading: false,
    }),
    [LOGOUT_SUCCESS]: (state) => ({
      ...state,
      user_data: {},
      auth_loading: false,
    }),
  },
  initialState
)

export default reducer

// Saga

const REGISTER = `${prefix}/REGISTER`
const LOGIN = `${prefix}/LOGIN`
const LOGOUT = `${prefix}/LOGOUT`

export const register = createAction(REGISTER, (registerInfo) => registerInfo)
export const login = createAction(LOGIN, (loginInfo) => loginInfo)
export const logout = createAction(LOGOUT)

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
function* loginSaga(action) {
  try {
    const history = yield getContext("history")
    yield put(pending())
    const res = yield axios.post(`${API_URL}/api/auth/login`, action.payload)
    yield put(loginSuccess(res.data.data))
    console.log(res.data.data)
    yield history.push("/welcome")
  } catch (error) {
    yield put(fail(error))
  }
}
function* logoutSaga(action) {
  try {
    const history = yield getContext("history")
    yield put(pending())
    yield axios.post(`${API_URL}/api/auth/logout`, action.payload)
    yield put(logoutSuccess())
    yield history.push("/auth/login")
  } catch (error) {
    yield put(fail(error))
  }
}

export function* authSaga() {
  yield takeEvery(LOGIN, loginSaga)
  yield takeEvery(REGISTER, registerSaga)
  yield takeEvery(LOGOUT, logoutSaga)
}
