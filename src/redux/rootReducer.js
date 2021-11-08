import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import history from "../history"
import auth from "./modules/auth"
import navbar from "./modules/navbar"
import chat from "./modules/chat"
import createRoom from "./modules/createRoom"

const reducer = combineReducers({
  auth,
  navbar,
  chat,
  createRoom,
  router: connectRouter(history),
})

export default reducer
