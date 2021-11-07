import createSagaMiddleware from "@redux-saga/core"
import { routerMiddleware } from "connected-react-router"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import history from "../history"
import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware({
  context: {
    history: history,
  },
})

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

export default store
