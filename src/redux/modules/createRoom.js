import axios from "axios"
import { createAction, handleActions } from "redux-actions"
import { takeEvery, put, getContext, delay } from "@redux-saga/core/effects"

const API_URL = process.env.REACT_APP_API_URL

const prefix = "front/createRoom"

const PENDING_CREATE_ROOM = `${prefix}/PENDING_CREATE_ROOM`
const SUCCESS_CREATE_ROOM = `${prefix}/SUCCESS_CREATE_ROOM`
const FAIL_CREATE_ROOM = `${prefix}/FAIL_CREATE_ROOM`

const SET_CAHT_TYPE = `${prefix}/SET_CAHT_TYPE`
const SET_PURPOSE = `${prefix}/SET_PURPOSE`
const SET_GRADE = `${prefix}/SET_GRADE`
const SET_HEAD_COUNT = `${prefix}/SET_HADE_COUNT`
const SET_GENDER = `${prefix}/SET_GENDER`

const SET_MBTI = `${prefix}/SET_MBTI`
const SET_INTEREST = `${prefix}/SET_INTEREST`
const SET_FACULTY = `${prefix}/SET_FACULTY`
const SET_NOMATTER = `${prefix}/SET_NOMATTER`

const SET_TITLE = `${prefix}/SET_TITLE`
const SET_DESC = `${prefix}/SET_DESC`

const SET_PAGE = `${prefix}/SET_PAGE`

export const pendingCreateRoom = createAction(PENDING_CREATE_ROOM)
export const successCreateRoom = createAction(
  SUCCESS_CREATE_ROOM,
  (body) => body
)
export const failCreateRoom = createAction(FAIL_CREATE_ROOM, (err) => err)

export const setChatType = createAction(SET_CAHT_TYPE, (chat_type) => chat_type)
export const setPurpose = createAction(SET_PURPOSE, (purpose) => purpose)
export const setGrade = createAction(SET_GRADE, (grade) => grade)
export const setHeadCount = createAction(SET_HEAD_COUNT, (count) => count)
export const setGender = createAction(SET_GENDER, (gender) => gender)

// chat_feature
export const setMBTI = createAction(SET_MBTI, (mbti) => mbti)
export const setInterest = createAction(SET_INTEREST, (interest) => interest)
export const setFaculty = createAction(SET_FACULTY, (faculty) => faculty)
export const setNomatter = createAction(SET_NOMATTER, (det) => det)

export const setTitle = createAction(SET_TITLE, (title) => title)
export const setDesc = createAction(SET_DESC, (desc) => desc)

export const setPage = createAction(SET_PAGE, (idx) => idx)

const initialState = {
  createRoom_data: {
    chat_type: "appointment",
    chat_purpose: "",
    grade: [],
    head_count: 3,
    gender: "",
    chat_feature: {
      mbti: {
        first_mbti: "",
        second_mbti: "",
        third_mbti: "",
        fourth_mbti: "",
      },
      interest: [],
      faculty: "",
      nomatter: false,
    },
    title: "",
    desc: "",
  },
  createRoom_loading: false,
  createRoom_error: null,
  create_page: 1,
}

const atr = {
  mbti: {
    first_mbti: "",
    second_mbti: "",
    third_mbti: "",
    fourth_mbti: "",
  },
  interest: [],
  faculty: "",
  nomatter: false,
}

const reducer = handleActions(
  {
    [PENDING_CREATE_ROOM]: (state, action) => ({
      ...state,
      createRoom_loading: true,
      createRoom_error: null,
    }),
    [SUCCESS_CREATE_ROOM]: (state, action) => ({
      ...state,
      createRoom_data: action.payload,
      createRoom_loading: false,
      createRoom_error: null,
    }),
    [FAIL_CREATE_ROOM]: (state, action) => ({
      ...state,
      createRoom_loading: false,
      createRoom_error: action.payload,
    }),
    [SET_CAHT_TYPE]: (state, action) => ({
      ...state,
      createRoom_data: { ...state.createRoom_data, chat_type: action.payload },
    }),
    [SET_PURPOSE]: (state, action) => ({
      ...state,
      createRoom_data: {
        ...state.createRoom_data,
        chat_purpose: action.payload,
      },
    }),
    [SET_GRADE]: (state, action) => ({
      ...state,
      createRoom_data: { ...state.createRoom_data, grade: action.payload },
    }),
    [SET_HEAD_COUNT]: (state, action) => ({
      ...state,
      createRoom_data: { ...state.createRoom_data, head_count: action.payload },
    }),
    [SET_GENDER]: (state, action) => ({
      ...state,
      createRoom_data: { ...state.createRoom_data, gender: action.payload },
    }),
    // chat_feature
    [SET_MBTI]: (state, action) => ({
      ...state,
      createRoom_data: {
        ...state.createRoom_data,
        chat_feature: {
          ...atr,
          mbti: action.payload,
        },
      },
    }),
    [SET_INTEREST]: (state, action) => ({
      ...state,
      createRoom_data: {
        ...state.createRoom_data,
        chat_feature: {
          ...atr,
          interest: [...action.payload],
        },
      },
    }),
    [SET_FACULTY]: (state, action) => ({
      ...state,
      createRoom_data: {
        ...state.createRoom_data,
        chat_feature: {
          ...atr,
          faculty: action.payload,
        },
      },
    }),
    [SET_NOMATTER]: (state, action) => ({
      ...state,
      createRoom_data: {
        ...state.createRoom_data,
        chat_feature: {
          ...atr,
          nomatter: action.payload,
        },
      },
    }),
    [SET_TITLE]: (state, action) => ({
      ...state,
      createRoom_data: { ...state.createRoom_data, title: action.payload },
    }),
    [SET_DESC]: (state, action) => ({
      ...state,
      createRoom_data: { ...state.createRoom_data, desc: action.payload },
    }),
    [SET_PAGE]: (state, action) => ({
      ...state,
      create_page: action.payload,
    }),
  },
  initialState
)

export default reducer

// Saga

const CREATE_ROOM = `${prefix}/CREATE_ROOM`

export const createRoom = createAction(CREATE_ROOM, (room_body) => room_body)

function* createRoomSaga(action) {
  try {
    const history = yield getContext("history")
    yield put(pendingCreateRoom())
    const res = yield axios.post(`${API_URL}/all/chat/create`, action.payload)
    console.log(res.data.message)
    yield put(successCreateRoom(res.data))
    yield history.push("/room")
  } catch (error) {
    yield put(failCreateRoom(error))
  }
}

export function* newRoomSaga() {
  yield takeEvery(CREATE_ROOM, createRoomSaga)
}
