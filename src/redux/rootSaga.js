import { all } from "redux-saga/effects"
import { authSaga } from "./modules/auth"
import { chatSaga } from "./modules/chat"

function* rootSaga() {
  yield all([authSaga(), chatSaga()])
}

export default rootSaga
