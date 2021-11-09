import { createAction, handleActions } from "redux-actions"

const prefix = "front/createRoom"

const SET_CAHT_TYPE = `${prefix}/SET_CAHT_TYPE`
const SET_PURPOSE = `${prefix}/SET_PURPOSE`
const SET_GRADE = `${prefix}/SET_GRADE`
const SET_HEAD_COUNT = `${prefix}/SET_HADE_COUNT`
const SET_GENDER = `${prefix}/SET_GENDER`
const SET_TITLE = `${prefix}/SET_TITLE`
const SET_DESC = `${prefix}/SET_DESC`

export const setChatType = createAction(SET_CAHT_TYPE, (chat_type) => chat_type)
export const setPurpose = createAction(SET_PURPOSE, (purpose) => purpose)
export const setGrade = createAction(SET_GRADE, (grade) => grade)
export const setHeadCount = createAction(SET_HEAD_COUNT, (count) => count)
export const setGender = createAction(SET_GENDER, (gender) => gender)
export const setTitle = createAction(SET_TITLE, (title) => title)
export const setDesc = createAction(SET_DESC, (desc) => desc)

const initialState = {
  chat_type: "appointment",
  purpose: "",
  grade: "",
  head_count: 3,
  gender: "",
  chat_feature: {
    mbti: [
      { first_mbti: "" },
      { second_mbti: "" },
      { third_mbti: "" },
      { fourth_mbti: "" },
    ],
    interest: {},
    faculty: "",
    department: "",
  },
  title: "",
  desc: "",
}

const reducer = handleActions(
  {
    [SET_CAHT_TYPE]: (state, action) => ({
      ...state,
      chat_type: action.payload,
    }),
    [SET_PURPOSE]: (state, action) => ({
      ...state,
      purpose: action.payload,
    }),
    [SET_GRADE]: (state, action) => ({
      ...state,
      grade: action.payload,
    }),
    [SET_HEAD_COUNT]: (state, action) => ({
      ...state,
      head_count: action.payload,
    }),
    [SET_GENDER]: (state, action) => ({
      ...state,
      gender: action.payload,
    }),
    [SET_TITLE]: (state, action) => ({
      ...state,
      title: action.payload,
    }),
    [SET_DESC]: (state, action) => ({
      ...state,
      desc: action.payload,
    }),
  },
  initialState
)

export default reducer
