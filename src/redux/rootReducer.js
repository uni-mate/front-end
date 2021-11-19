import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import history from "../history"
import auth from "./modules/auth"
import navbar from "./modules/navbar"
import chat from "./modules/chat"
import mychat from "./modules/mychat"
import createRoom from "./modules/createRoom"
import user from "./modules/user"

import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
  whilelist: ["auth"],
  blacklist: ["createRoom"],
}

const reducer = combineReducers({
  auth,
  navbar,
  chat,
  mychat,
  createRoom,
  user,
  router: connectRouter(history),
})

export default persistReducer(persistConfig, reducer)
// export default reducer
