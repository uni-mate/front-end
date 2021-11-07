import React, { useEffect } from "react"
import { useHistory } from "react-router"
import Carousel from "react-material-ui-carousel"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import Imag1 from "../../assets/main-bg/bg1.png"
import Imag2 from "../../assets/main-bg/bg2.jpg"
import Imag3 from "../../assets/main-bg/bg3.jpg"
import useNavbar from "../../hooks/useNavbar"

import "./TutorialPage.css"

interface Image {
  name: string
  imaUrl: string
}

const mainimageList = [
  {
    name: "bg1",
    imaUrl: Imag1,
  },
  {
    name: "bg2",
    imaUrl: Imag2,
  },
  {
    name: "bg3",
    imaUrl: Imag3,
  },
]

const TutorialPage = () => {
  const history = useHistory()
  const [navbarInside, navbarOutside] = useNavbar()

  const nextPageHandler = () => {
    history.push("/room")
    navbarInside()
  }

  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])
  return (
    <div className="carousel-container">
      <Carousel
        className="carousel"
        autoPlay={false}
        navButtonsAlwaysInvisible={true}
        animation={"slide"}
        cycleNavigation={false}
      >
        {mainimageList.map((image: Image) => (
          <div className="img-container" key={image.imaUrl}>
            <img src={image.imaUrl} alt={image.name} />
            {image.name === "bg3" && (
              <div className="next-page" onClick={nextPageHandler}>
                <ArrowForwardIosIcon />
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default TutorialPage
