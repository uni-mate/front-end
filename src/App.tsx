import React from "react"
import { Switch, Route } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"
import history from "./history"

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

// User
import HomePage from "./pages/Home/HomePage"
import LoginPageContainer from "./pages/User/LoginPage/LoginPageContainer"
import RegisterPageContainer from "./pages/User/RegisterPage/RegisterPageContainer"
import ProfileCustomPage from "./pages/User/ProfileCustomPage/ProfileCustomPage"

// Admin
import AdminPage from "./pages/Admin/AdminPage"

// Partial
import Navbar from "./components/Partials/Navbar/Navbar"

import { useSelector } from "react-redux"

import { NavBarState, RootState } from "./types/types"
import "./App.css"

function App() {
  const navbarState = useSelector<RootState, NavBarState>(
    (state) => state.navbar
  )
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {/* 로그인 관련 */}
        <Route exact path="/auth/login" component={LoginPageContainer} />
        <Route exact path="/auth/register" component={RegisterPageContainer} />
        {/* 방목록 */}
        <Route exact path="/room/create" component={CreateRoomPage} />
        <Route
          exact
          path="/room/create/detail"
          component={CreateRoomDetailPageContainer}
        />
        <Route exact path="/room/filter" component={FilterPage} />
        <Route exact path="/room/:userid/:roomid" component={CurrentRoomPage} />
        <Route exact path="/room/:userid" component={MyRoomListPage} />
        <Route path="/room" component={RoomListPageContainer} />
        {/* 프로필 수정 */}
        <Route exact path="/profile/custom" component={ProfileCustomPage} />
        <Route exact path="/profile/:id" component={ProfileEditPage} />
        {/* 프로필 보기 */}
        <Route exact path="/profile" component={ProfilePageContainer} />
        {/* 관리자 페이지 */}
        <Route exact path="/adminpage" component={AdminPage} />
        {/* 튜토리얼 페이지 */}
        <Route exact path="/tutorial" component={TutorialPage} />
        {/* 홈페이지 */}
        <Route exact path="/" component={HomePage} />
      </Switch>
      {navbarState.isNavbar && <Navbar />}
    </ConnectedRouter>
  )
}

export default App
