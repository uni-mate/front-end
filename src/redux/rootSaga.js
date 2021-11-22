import { all } from "redux-saga/effects"
import { authSaga } from "./modules/auth"
import { chatSaga } from "./modules/chat"
import { newRoomSaga } from "./modules/createRoom"
import { myChatSaga } from "./modules/mychat"
import { signInSaga } from "./modules/signIn"

function* rootSaga() {
  yield all([authSaga(), signInSaga(), chatSaga(), newRoomSaga(), myChatSaga()])
}

export default rootSaga
