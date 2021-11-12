import { all } from "redux-saga/effects"
import { authSaga } from "./modules/auth"
import { chatSaga } from "./modules/chat"
import { newRoomSaga } from "./modules/createRoom"

function* rootSaga() {
  yield all([authSaga(), chatSaga(), newRoomSaga()])
}

export default rootSaga
