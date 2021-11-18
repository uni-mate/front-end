import React from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"

// User
import ProfilePageContainer from "./pages/User/ProfilePage/ProfilePageContainer"
import ProfileEditPage from "./pages/User/ProfileEditPage/ProfileEditPage"
import TutorialPage from "./pages/Tutorial/TutorialPage"

// Main
import RoomListPageContainer from "./pages/Room/RoomListPage/RoomListPageContainer"
import CreateRoomPage from "./pages/Room/CreateRoomPage/CreateRoomPage"
import MyRoomListPage from "./pages/Room/MyRoomListPage/MyRoomListPage"
import CurrentRoomPage from "./pages/Room/CurrentRoomPage/CurrentRoomPage"
import FilterPage from "./pages/Filter/FilterPage"
import CreateRoomDetailPageContainer from "./pages/Room/CreateRoomPage/CreateRoomDetailPageContainer"

// Auth
import HomePage from "./pages/Home/HomePage"
import LoginPageContainer from "./pages/User/LoginPage/LoginPageContainer"
import RegisterPageContainer from "./pages/User/RegisterPage/RegisterPageContainer"
import SignOutPage from "./pages/User/SignOutPage/SignOutPage"
import ProfileCustomPage from "./pages/User/ProfileCustomPage/ProfileCustomPage"
import WelcomePage from "./pages/Welcome/WelcomePage"

// Admin
import AdminPage from "./pages/Admin/AdminPage"

// Partial
import Navbar from "./components/Partials/Navbar/Navbar"

import { useSelector } from "react-redux"

import { NavBarState, RootState } from "./types/types"
import AuthRoute from "./hoc/AuthRoute"
import UnAuthRoute from "./hoc/UnAuthRoute"
import history from "./history"

import Error404 from "./pages/Error/Error404"

import "./App.css"

function App() {
  const navbarState = useSelector<RootState, NavBarState>(
    (state) => state.navbar
  )
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {/* 로그인 */}
        <UnAuthRoute
          exact
          path="/auth/login"
          RenderComponent={LoginPageContainer}
        />
        <UnAuthRoute
          exact
          path="/auth/register"
          RenderComponent={RegisterPageContainer}
        />
        <AuthRoute exact path="/welcome" RenderComponent={WelcomePage} />
        <AuthRoute exact path="/signout" RenderComponent={SignOutPage} />
        {/* 방목록 */}
        <AuthRoute exact path="/room/create" RenderComponent={CreateRoomPage} />
        <AuthRoute
          exact
          path="/room/create/detail"
          RenderComponent={CreateRoomDetailPageContainer}
        />
        {/* <AuthRoute /> */}
        <AuthRoute exact path="/room/filter" RenderComponent={FilterPage} />
        <AuthRoute
          exact
          path="/room/:userid/:roomid"
          RenderComponent={CurrentRoomPage}
        />
        <AuthRoute
          exact
          path="/room/:userid"
          RenderComponent={MyRoomListPage}
        />
        <AuthRoute path="/room" RenderComponent={RoomListPageContainer} />
        {/* 프로필 수정 */}
        <AuthRoute
          exact
          path="/profile/custom"
          RenderComponent={ProfileCustomPage}
        />
        <AuthRoute
          exact
          path="/profile/:id"
          RenderComponent={ProfileEditPage}
        />
        {/* 프로필 보기 */}
        <AuthRoute
          exact
          path="/profile"
          RenderComponent={ProfilePageContainer}
        />
        {/* 관리자 페이지 */}
        <Route exact path="/adminpage" component={AdminPage} />
        {/* 홈페이지 */}
        <UnAuthRoute exact path="/" RenderComponent={HomePage} />
        <Route component={Error404} />
      </Switch>
      {navbarState.isNavbar && <Navbar />}
    </ConnectedRouter>
  )
}

export default App
