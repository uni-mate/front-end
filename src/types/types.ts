import { RouterState } from "connected-react-router"
import { Reducer, AnyAction } from "redux"
import { ChatState, MyChatState } from "./ChatTypes"
import { CreateRoomState } from "./CreateRoomTypes"
import { FilterState } from "./FilterTypes"
import { NavBarState } from "./NavbarTypes"
import { PromiseModalType, PromiseState } from "./PromiseTypes"
import { AuthState } from "./UserTypes"

export interface RootState {
  auth: AuthState
  navbar: NavBarState
  chat: ChatState
  mychat: MyChatState
  createRoom: CreateRoomState
  filter: FilterState
  promise: PromiseState
  promiseModal: PromiseModalType
  router: Reducer<RouterState<unknown>, AnyAction>
}
