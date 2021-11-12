import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./redux/store"

import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App"

import "./index.css"

import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
)
