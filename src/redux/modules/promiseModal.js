import { createAction, handleActions } from "redux-actions"

const prefix = "front/promiseModal"

const OPEN_MODAL = `${prefix}/OPEN_MODAL`
const CLOSE_MODAL = `${prefix}/CLOSE_MODAL`

export const openModal = createAction(OPEN_MODAL)
export const closeModal = createAction(CLOSE_MODAL)

const initialState = {
  isPromiseModalOpen: false,
}

const reducer = handleActions(
  {
    [OPEN_MODAL]: () => ({
      isPromiseModalOpen: true,
    }),
    [CLOSE_MODAL]: () => ({
      isPromiseModalOpen: false,
    }),
  },
  initialState
)

export default reducer
