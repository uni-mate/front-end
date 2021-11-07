import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import history from "../history"
import auth from "./modules/auth"
import navbar from "./modules/navbar"
import chat from "./modules/chat"

const reducer = combineReducers({
  auth,
  navbar,
  chat,
  router: connectRouter(history),
})

export default reducer
