import React from "react"
import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"
import { RootState, UserState } from "../types/types"

import _ from "lodash"

const AuthRoute = ({ RenderComponent, ...rest }: any) => {
  const isUserLoggedIn = useSelector<RootState, UserState | {}>(
    (state) => state.auth.user_data
  )
  return (
    <Route
      {...rest}
      render={() =>
        _.isEmpty(isUserLoggedIn) ? (
          <Redirect to={{ pathname: "/auth/login" }} />
        ) : (
          <RenderComponent />
        )
      }
    />
  )
}

export default AuthRoute
