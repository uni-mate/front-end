import React, { useEffect } from "react"
import { useHistory } from "react-router"
import useNavbar from "../../../hooks/useNavbar"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import Carousel from "react-material-ui-carousel"

import "./CreateRoomDetailPage.css"

const CreateRoomDetailPage = () => {
  const history = useHistory()
  const [navbarInside, navbarOutside] = useNavbar()

  const nextPageHandler = () => {
    history.push("/room/create")
    navbarInside()
  }
  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])

  const prevPageHandler = () => {
    history.goBack()
    // navbarInside()
  }
  return (
    <div className="create-detail">
      <div className="create-detail__header">
        <ArrowBackIcon onClick={prevPageHandler} />
      </div>
      <div className="create-detail__body">
        <Carousel
          autoPlay={false}
          navButtonsAlwaysInvisible={true}
          animation={"slide"}
          cycleNavigation={false}
        >
          <div className="list">page1</div>
          <div className="list">page2</div>
          <div className="list">page3</div>
          <div className="list">page4</div>
        </Carousel>
      </div>
    </div>
  )
}

export default CreateRoomDetailPage
