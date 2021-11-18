import React from "react"
import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"
import { RootState, UserState } from "../types/types"

import _ from "lodash"

const UnAuthRoute = ({ RenderComponent, ...rest }: any) => {
  const isUserLoggedIn = useSelector<RootState, UserState | {}>(
    (state) => state.auth.user_data
  )
  return (
    <Route
      {...rest}
      render={() =>
        !_.isEmpty(isUserLoggedIn) ? (
          <Redirect to={{ pathname: "/room" }} />
        ) : (
          <RenderComponent />
        )
      }
    />
  )
}

export default UnAuthRoute
