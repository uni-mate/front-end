import React, { useEffect } from "react"
import useNavbar from "../../hooks/useNavbar"

import "./Error404.css"

const Error404 = () => {
  const [, navbarOutside] = useNavbar()
  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])
  return (
    <div className="error__conatiner">
      <div className="error__title">페이지를 찾을 수 없습니다.</div>
    </div>
  )
}

export default Error404
