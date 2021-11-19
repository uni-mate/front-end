import { all } from "redux-saga/effects"
import { authSaga } from "./modules/auth"
import { chatSaga } from "./modules/chat"
import { newRoomSaga } from "./modules/createRoom"
import { myChatSaga } from "./modules/mychat"

function* rootSaga() {
  yield all([authSaga(), chatSaga(), newRoomSaga(), myChatSaga()])
}

export default rootSaga
