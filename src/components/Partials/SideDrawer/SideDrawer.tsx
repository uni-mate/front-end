import { useState, useEffect, useCallback } from "react"
import * as React from "react"
import Box from "@mui/material/Box"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import Button from "@mui/material/Button"

import user1 from "../../../assets/user/user1.jpg"
import user2 from "../../../assets/user/user2.jpg"
import user3 from "../../../assets/user/user3.png"
import user4 from "../../../assets/user/user4.png"
import user5 from "../../../assets/user/user5.jpg"
import user6 from "../../../assets/user/user6.jpeg"
import me from "../../../assets/me/me.jpg"

import Eye from "../../../assets/chattingRoom/eye.png"
import PromiseInfo from "../../../assets/chattingRoom/promiseInfo.png"
// import OpenDoor from "../../../assets/chattingRoom/openDoor.png"
import CloseDoor from "../../../assets/chattingRoom/closeDoor.png"

import { ChatType, TestUserState } from "../../../types/ChatTypes"
import BasicModal from "./../Modal/BasicModal"
import RoomModal from "../Modal/RoomModal/RoomModal"
import PromisePageContainer from "../../../pages/Promise/PromisePageContainer"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../types/types"
import { openModal } from "../../../redux/modules/promiseModal"

import "./SideDrawer.css"

type Anchor = "right"

interface Props {
  children: any
  userList?: TestUserState[]
  currentChatPage?: ChatType
}

function SwipeableTemporaryDrawer({
  children,
  userList,
  currentChatPage,
}: Props) {
  const promiseModal = useSelector<RootState, boolean>(
    (state) => state.promiseModal.isPromiseModalOpen
  )
  const dispatch = useDispatch()
  const promiseModalOpen = useCallback(() => {
    dispatch(openModal())
  }, [dispatch])
  const [userProfileList, setUserProfileList] = useState(userList)
  useEffect(() => {
    userList && setUserProfileList(userList)
  }, [userList])

  useEffect(() => {
    setUserProfileList(
      userList &&
        userList.map((userInfo) => {
          let image
          switch (userInfo.name) {
            case "고니":
              image = me
              break
            case "아이유":
              image = user1
              break
            case "박보검":
              image = user3
              break
            case "조이":
              image = user2
              break
            case "아구몬":
              image = user5
              break
            case "짱구":
              image = user6
              break
            case "라이언":
              image = user4
              break
          }
          return {
            ...userInfo,
            image,
          }
        })
    )
  }, [userList])

  const [state, setState] = useState({
    right: false,
  })

  // const [isDoorOpen, setIsDoorOpen] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: Anchor) => (
    <React.Fragment>
      <Box
        sx={{ width: "100%" }}
        role="presentation"
        onClick={toggleDrawer(anchor, true)}
        onKeyDown={toggleDrawer(anchor, true)}
      >
        {isModalOpen && (
          <BasicModal
            isModalOpen={isModalOpen}
            width="300px"
            height="500px"
            backgroundColor="#fff"
            boxShadow={24}
            padding="30px 20px"
          >
            <RoomModal
              chat={currentChatPage}
              closeModal={() => setIsModalOpen(false)}
              isMyRoom={true}
            />
          </BasicModal>
        )}
        {promiseModal && (
          <BasicModal
            isModalOpen={promiseModal}
            width="100%"
            height="100%"
            backgroundColor="#fff"
            boxShadow={24}
            ani={true}
          >
            <PromisePageContainer />
          </BasicModal>
        )}
        <div className="side-drawer__title">참가자 목록</div>
        <div className="side-drawer__user">
          {userProfileList?.map((user) => (
            <div className="side-drawer__user-info" key={user.image}>
              <img src={user.image} alt="프로필" />
              <span>{user.name}</span>
            </div>
          ))}
        </div>
        <div className="side-drawer__promiseInfo">
          <img src={PromiseInfo} alt="info" />
          <div
            onClick={() => {
              promiseModalOpen()
              // toggleDrawer(anchor, false)
            }}
          >
            약속 등록
          </div>
        </div>
        <div
          className="side-drawer__roomInfo"
          onClick={() => setIsModalOpen(true)}
        >
          <img src={Eye} alt="info" />
          <div>채팅방 정보 보기</div>
        </div>
        <div
          className="side-drawer__door"
          onClick={() => alert("구현 중입니다.")}
        >
          <div>
            <img src={CloseDoor} alt="closeDoor" />
            <div className="side-drawer__door--close">방문 닫기</div>
          </div>
          {/* {isDoorOpen ? (
          <div onClick={() => setIsDoorOpen(false)}>
            <img src={OpenDoor} alt="openDoor" />
            <div className="side-drawer__door--open">방문 열기</div>
          </div>
        ) : (
          <div onClick={() => setIsDoorOpen(true)}>
            <img src={CloseDoor} alt="closeDoor" />
            <div className="side-drawer__door--close">방문 닫기</div>
          </div>
        )} */}
        </div>
      </Box>
    </React.Fragment>
  )

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{children}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  )
}

export default SwipeableTemporaryDrawer
