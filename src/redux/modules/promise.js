import axios from "axios"
import { createAction, handleActions } from "redux-actions"
import { takeEvery, put, delay } from "@redux-saga/core/effects"
import { closeModal } from "./promiseModal"

const API_URL = process.env.REACT_APP_API_URL

const prefix = "front/promise"

const PENDING_CREATE_PROMISE = `${prefix}/PENDING_CREATE_PROMISE`
const SUCCESS_CREATE_PROMISE = `${prefix}/SUCCESS_CREATE_PROMISE`
const FAIL_CREATE_PROMISE = `${prefix}/FAIL_CREATE_PROMISE`
const SET_PROMISE_PURPOSE = `${prefix}/SET_PROMISE_PURPOSE`
const SET_PROMISE_WHEN = `${prefix}/SET_PROMISE_WHEN`
const SET_PROMISE_WHERE = `${prefix}/SET_PROMISE_WHERE`
const SET_PROMISE_TITLE = `${prefix}/SET_PROMISE_TITLE`
const SET_PROMISE_DESC = `${prefix}/SET_PROMISE_DESC`
const SET_PROMISE_PAGE = `${prefix}/SET_PROMISE_PAGE`

const CLEAR_CREATE_PROMISE = `${prefix}/CLEAR_CREATE_PROMISE`
const PROMISE_REREADY = `${prefix}/PROMISE_REREADY`

export const pendingCreatePromise = createAction(PENDING_CREATE_PROMISE)
export const successCreatePromise = createAction(
  SUCCESS_CREATE_PROMISE,
  (body) => body
)
export const failCreatePromise = createAction(FAIL_CREATE_PROMISE, (err) => err)
export const setPromisePurpose = createAction(
  SET_PROMISE_PURPOSE,
  (chat_type) => chat_type
)
export const setPromiseWhen = createAction(SET_PROMISE_WHEN, (whem) => whem)
export const setPromiseWhere = createAction(SET_PROMISE_WHERE, (where) => where)
export const setPromiseTitle = createAction(SET_PROMISE_TITLE, (title) => title)
export const setPromiseDesc = createAction(SET_PROMISE_DESC, (desc) => desc)
export const setPromisePage = createAction(SET_PROMISE_PAGE, (idx) => idx)

export const clearCreatePromise = createAction(CLEAR_CREATE_PROMISE)
export const promiseReReady = createAction(PROMISE_REREADY)

const initialState = {
  createPromise_data: {
    promise_purpose: "",
    where_to_meet: "",
    when_to_meet: "",
    promise_title: "",
    promise_desc: "",
  },
  createPromise_loading: false,
  createPromise_error: null,
  createPromise_page: 1,
  createPromise_success: false,
}

const reducer = handleActions(
  {
    [PENDING_CREATE_PROMISE]: (state) => ({
      ...state,
      createPromise_loading: true,
      createPromise_error: null,
    }),
    [SUCCESS_CREATE_PROMISE]: (state) => ({
      ...state,
      createPromise_loading: false,
      createPromise_error: null,
      createPromise_success: true,
    }),
    [FAIL_CREATE_PROMISE]: (state, action) => ({
      ...state,
      createPromise_loading: false,
      createPromise_error: action.payload,
    }),
    [SET_PROMISE_PURPOSE]: (state, action) => ({
      ...state,
      createPromise_data: {
        ...state.createPromise_data,
        promise_purpose: action.payload,
      },
    }),
    [SET_PROMISE_WHEN]: (state, action) => ({
      ...state,
      createPromise_data: {
        ...state.createPromise_data,
        when_to_meet: action.payload,
      },
    }),
    [SET_PROMISE_WHERE]: (state, action) => ({
      ...state,
      createPromise_data: {
        ...state.createPromise_data,
        where_to_meet: action.payload,
      },
    }),
    [SET_PROMISE_TITLE]: (state, action) => ({
      ...state,
      createPromise_data: {
        ...state.createPromise_data,
        promise_title: action.payload,
      },
    }),
    [SET_PROMISE_DESC]: (state, action) => ({
      ...state,
      createPromise_data: {
        ...state.createPromise_data,
        promise_desc: action.payload,
      },
    }),
    [SET_PROMISE_PAGE]: (state, action) => ({
      ...state,
      createPromise_page: action.payload,
    }),
    [CLEAR_CREATE_PROMISE]: () => ({
      createPromise_data: initialState,
    }),
    [PROMISE_REREADY]: (state) => ({
      ...state,
      createPromise_success: false,
    }),
  },
  initialState
)

export default reducer

// Saga

const CREATE_PROMISE = `${prefix}/CREATE_PROMISE`

export const createPromise = createAction(CREATE_PROMISE)

function* createPromiseSaga(action) {
  try {
    yield put(pendingCreatePromise())
    yield delay(2000)
    const res = yield axios.post(`${API_URL}/api/promise`, action.payload)
    console.log(res.data.message)
    yield put(closeModal())
    yield put(successCreatePromise())
  } catch (error) {
    yield put(failCreatePromise(error))
  }
}

export function* newPromiseSaga() {
  yield takeEvery(CREATE_PROMISE, createPromiseSaga)
}
