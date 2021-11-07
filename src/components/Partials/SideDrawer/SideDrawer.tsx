import * as React from "react"
import Box from "@mui/material/Box"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"

import "./SideDrawer.css"

type Anchor = "right"

function SwipeableTemporaryDrawer({ children }: any) {
  const [state, setState] = React.useState({
    right: false,
  })

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
    <Box
      sx={{ width: "50%" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <span className="side-drawer__title">참가자 목록</span>
      <div className="side-drawer__user">
        <span>너구리</span>
        <span>개구리</span>
        <span>신라면</span>
      </div>
      <Divider className="divider" />
      <span className="side-drawer__content">만남 내용 보기</span>
      <Divider className="divider" />
      <div className="side-drawer__door">
        <span className="side-drawer__door--open">방문 열기</span>
        <span className="side-drawer__door--close">방문 닫기</span>
      </div>
    </Box>
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
