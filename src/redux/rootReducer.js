import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import history from "../history"
import auth from "./modules/auth"
import signIn from "./modules/signIn"
import navbar from "./modules/navbar"
import chat from "./modules/chat"
import mychat from "./modules/mychat"
import createRoom from "./modules/createRoom"
import filter from "./modules/filter"

import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
  whilelist: ["auth", "chat", "mychat"],
}

const reducer = combineReducers({
  auth,
  signIn,
  navbar,
  chat,
  mychat,
  createRoom,
  filter,
  router: connectRouter(history),
})

export default persistReducer(persistConfig, reducer)
// export default reducer
