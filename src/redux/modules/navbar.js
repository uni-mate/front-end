import { handleActions } from "redux-actions"
import { createAction } from "redux-actions"

const prefix = "front/navbar"
const NAVBAR_OUT = `NAVBAR_OUT${prefix}`
const NAVBAR_IN = `NAVBAR_IN/${prefix}`

export const navbarOut = createAction(NAVBAR_OUT)
export const navbarIN = createAction(NAVBAR_IN)

const initialState = {
  isNavbar: true,
}

const reducer = handleActions(
  {
    [NAVBAR_IN]: () => ({
      isNavbar: true,
    }),
    [NAVBAR_OUT]: () => ({
      isNavbar: false,
    }),
  },
  initialState
)

export default reducer
